import IController from "./IController";
import { TYPES } from "../inversify.types";
import { inject, injectable } from "inversify";
import { IWebServer } from "../webserver/IWebServer";
import { IRequest, IResponse } from "../webserver/IWebRequest";
import { UserService } from "../services/userService";
import { AccountService } from "../services/accountService";
import AuthService from "../services/authService";
import { iUser } from "../models/user";
import { iAccount } from "../models/account";

@injectable()
export default class UserController implements IController {
    public route: string = "/users";

    @inject(TYPES.UserService)
    private _userService!: UserService;

    @inject(TYPES.AccountService)
    _accountService!: AccountService;

    @inject(TYPES.IWebServer)
    private _webServer!: IWebServer;

    @inject(TYPES.AuthService)
    private _authService!: AuthService;

    initRoutes() {
        this._webServer.registerGet(this.route, (request: IRequest, response: IResponse) =>
            this.getUsers(request, response));

        this._webServer.registerProtectedGet('/user', (request: IRequest, response: IResponse) =>
            this.getAuthenticatedUser(request, response));

        this._webServer.registerProtectedGet(`${this.route}/:id`, (request: IRequest, response: IResponse) =>
            this.getUser(request, response));

        this._webServer.registerProtectedPost(this.route, (request: IRequest, response: IResponse) =>
            this.createUser(request, response));

        this._webServer.registerProtectedPut(this.route, (request: IRequest, response: IResponse) =>
            this.updateUser(request, response));

    }
    async getUsers(request: IRequest, response: IResponse) {
        let result = await this._userService.getAllUsers();
        response.send(result);
    }
    async createUser(request: IRequest, response: IResponse) {
        let user = request.body.user;
        let result = await this._userService.createUser(user);
        let resultCode = result ? 200 : 400;
        response.status(resultCode);
    }
    async getUser(request: IRequest, response: IResponse) {
        let id = request.params.id;
        let user = await this._userService.getUser(id);
        response.send(user)
    }
    getAuthenticatedUser(request: IRequest, response: IResponse) {
        response.send(request.user)
    }
    async updateUser(request: IRequest, response: IResponse) {
        var authenticatedUser = request.user;
        var user = await this._userService.findByEmail(authenticatedUser.email);
        var account = await this._accountService.findByEmail(authenticatedUser.email);
        var updatedUser = <iUser>{
            id: user.id,
        }
        var updatedAccount = <iAccount>{
            id: account.id
        }
        var updateInfo = request.body;
        if (updateInfo.priceForPost) {
            updatedUser.priceForPost = updateInfo.priceForPost;
        }
        if (updateInfo.email) {
            updatedUser.email = updateInfo.email;
            updatedAccount.email = updateInfo.email;
        }
        if (updateInfo.password) {
            updatedAccount.password = await this._authService.hash(updateInfo.password);
        }
        var userUpdateResult = await this._userService.update(updatedUser);
        var accountUpdateResult = await this._accountService.update(updatedAccount);
        let statusCode = userUpdateResult && accountUpdateResult ? 200 : 500;
        response.status(statusCode);
        response.send(null);
    }
}