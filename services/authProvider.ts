import { IWebServer } from "../webserver/IWebServer";
import passport from "passport";
import { OAuth2Client as GoogleStrategy } from "google-auth-library";
import { Strategy as LocalStrategy } from "passport-local";
import config from "../config/config";
import { injectable, inject } from "inversify";
import { IRequest, IResponse } from "../webserver/IWebRequest";
import JWTService from "./jwtService";
import { TYPES } from "../inversify.types";
import AuthService from "./authService";
import { iAccount, authProvider } from "../models/account";
import { AccountService } from "./accountService";
import axios from "axios";

export interface IAuthProvider {
    register(webServer: IWebServer, route: string): void;
    verifyAccount(...arg: any): void;
}

@injectable()
export class LocalAuthProvider implements IAuthProvider {

    @inject(TYPES.JWTService)
    private _jwtService!: JWTService;

    @inject(TYPES.AccountService)
    private _accountService!: AccountService;

    @inject(TYPES.AuthService)
    private _authService!: AuthService;

    register(webServer: IWebServer, route: string): void {
        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            session: false
        }, async (...args) => this.verifyAccount(...args)));

        webServer.registerPost(`${route}/login`, (request: any, response: any, next: any) =>
            passport.authenticate("local", { session: false }, (err, user, info) => {
                if (err || !user) {
                    return response
                        .status(400)
                        .json({
                            error: err,
                            user: user,
                            info: info
                        });
                }
                const token = this._jwtService.sign(user);
                return response.json({ username: user.name, access_token: token });
            })(request, response, next)
        );
        this._jwtService.register();
    }
    async verifyAccount(userName: string, password: string, callback: Function) {
        const account = await this._accountService.findByEmail(userName);
        if (!account) {
            return callback(null, false, "invalid user name or password");
        }
        const doseMatch = await this._authService.verifyHash(password, account.password || "");
        if (!doseMatch) {
            return callback(null, false, "invalid user name or password");
        }
        return callback(null, { email: account.email, name: account.name });

    }
}

@injectable()
export class GoogleAuthProvider implements IAuthProvider {

    private _googleStrategy!: GoogleStrategy;

    @inject(TYPES.AccountService)
    private _accountService!: AccountService;

    @inject(TYPES.JWTService)
    private _jwtService!: JWTService;

    register(webServer: IWebServer, route: string): void {
        this._googleStrategy = new GoogleStrategy(config.oAuth.google.appId);

        webServer.registerPost(`${route}/google`, async (request: IRequest, response: IResponse) =>
            await this.verifyAccount(request, response));
    }
    async verifyAccount(request: IRequest, response: IResponse) {
        const idToken = request.body.id_token;
        try {
            const profileInfo = await this._googleStrategy.verifyIdToken({
                idToken: idToken,
                audience: config.oAuth.google.appId
            });
            console.log("profileInfo", profileInfo);
            const paylod = profileInfo.getPayload();

            if (paylod && paylod.email_verified && paylod.email) {
                console.log("paylod.email", paylod.email);
                let account = await this._accountService.findByEmail(paylod.email);
                if (!account) {
                    account = <iAccount>{};
                    const name = paylod.given_name || paylod.family_name || paylod.email;
                    account.name = name;
                    account.email = paylod.email;
                    account.authToken = idToken;
                    account.avatar = paylod.picture || "";
                    //account.authRefreshToken = refreshToken;
                    await this._accountService.createAccount(account);
                }
                const token = this._jwtService.sign({ email: account.email });
                return response.json({ access_token: token });
            }
            else {
                return response.status(400);
            }
        }
        catch (err) {
            console.log("err", err);
            return response.status(400).json({ error: err.message });
        }

    }
}

@injectable()
export class FacebookAuthProvider implements IAuthProvider {

    @inject(TYPES.JWTService)
    private _jwtService!: JWTService;

    @inject(TYPES.AccountService)
    private _accountService!: AccountService;

    register(webServer: IWebServer, route: string): void {
        webServer.registerPost(`${route}/facebook`, (request: IRequest, response: IResponse) =>
            this.verifyAccount(request, response));
    }
    async verifyAccount(request: IRequest, response: IResponse) {
        var fbAuthData = request.body;
        const account = await this._accountService.findByEmail(fbAuthData.email);
        if (account) {
            var token = this._jwtService.sign({ id: account.email });
            response.send({ access_token: token, username: account.name, isNewUser: false });
            return;
        }
        const newAccount = <iAccount>{
            name: fbAuthData.name,
            email: fbAuthData.email,
            id: fbAuthData.id,
            authToken: fbAuthData.accessToken,
            authProvider: authProvider.facebook
        };
        await this._accountService.createAccount(newAccount);
        var token = this._jwtService.sign({ email: newAccount.email });
        response.send({ access_token: token, username: newAccount.name, isNewUser: true });
    }
}