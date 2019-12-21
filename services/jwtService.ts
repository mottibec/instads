import passport from "passport";
import { Strategy as jwtStrategy, ExtractJwt } from "passport-jwt";
import config from "../config/config";
import jwt from "jsonwebtoken";
import { injectable, inject } from "inversify";
import { TYPES } from "../inversify.types";
import { UserService } from "./userService";
import { AccountService } from "./accountService";

@injectable()
export default class JWTService {

    @inject(TYPES.AccountService)
    private _userService!: AccountService;

    register() {
        passport.use(new jwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.jwtSecret
        }, async (jwtPayload: any, callback: Function) => {
            const account = await this._userService.findByEmail(jwtPayload.email);
            if (account) {
                return callback(null, account);
            }
            return callback("", false);

        }));
    }
    sign(item: any) {
        const token = jwt.sign(item, config.jwtSecret);
        return token;
    }
    verifyToken() {
        return passport.authenticate('jwt', { session: false });
    }
}