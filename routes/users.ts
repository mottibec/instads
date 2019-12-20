import IController from "./IController";
import { TYPES } from "../inversify.types";
import { inject, injectable } from "inversify";
import { IWebServer } from "../webserver/IWebServer";
import { IRequest, IResponse } from "../webserver/IWebRequest";
import { UserService } from "../services/userService";

@injectable()
export default class UserController implements IController {
    public route: string = "/users";

    @inject(TYPES.UserService)
    private _userService!: UserService;

    @inject(TYPES.IWebServer)
    private _webServer!: IWebServer;

    initRoutes() {
        this._webServer.registerGet(this.route, (request: IRequest, response: IResponse) =>
            this.getUsers(request, response));

        this._webServer.registerProtectedGet('/user', (request: IRequest, response: IResponse) =>
            this.getAuthenticatedUser(request, response));

        this._webServer.registerProtectedGet(`${this.route}/:id`, (request: IRequest, response: IResponse) =>
            this.getUser(request, response));

        this._webServer.registerProtectedPost(this.route, (request: IRequest, response: IResponse) =>
            this.createUser(request, response));

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
}