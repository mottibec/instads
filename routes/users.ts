import IController from "./IController";
import { TYPES } from "../inversify.types";
import { inject, injectable } from "inversify";
import { IWebServer } from "../webserver/IWebServer";
import { IRequest, IResponse } from "../webserver/IWebRequest";
import { UserService } from "../services/userService";

@injectable()
export default class UserController implements IController {
    public route: string = "/user";

    @inject(TYPES.UserService)
    private _userService!: UserService;

    @inject(TYPES.IWebServer)
    private _webServer!: IWebServer;

    initRoutes() {
        this._webServer.registerGet(this.route, (request: IRequest, response: IResponse) =>
            this.getUsersView(request, response));

            this._webServer.registerGet(`${this.route}s`, (request: IRequest, response: IResponse) =>
            this.getUsers(request, response));

        this._webServer.registerProtectedGet(`${this.route}/:id`, (request: IRequest, response: IResponse) =>
            this.getUser(request, response));

        this._webServer.registerProtectedPost(this.route, (request: IRequest, response: IResponse) =>
            this.createUser(request, response));

        this._webServer.registerProtectedPost(`${this.route}/:id/rate`, (request: IRequest, response: IResponse) =>
            this.rateUser(request, response));

        this._webServer.registerProtectedPost(`${this.route}/ping`, (request: IRequest, response: IResponse) =>
            this.pingUser(request, response));

    }
    async getUsersView(request: IRequest, response: IResponse) {
        let result = await this._userService.getAllUsers();
        response.render("users", {users: result});
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
    rateUser(request: IRequest, response: IResponse) {
        let rating = request.body.rating;
        let userId = request.body.user.id;
        let user = {
            id: userId,
            rating: rating
        }
        response.send(200);
    }
     pingUser(request: IRequest, response: IResponse) {
        let user = request.body.userId;
        response.send(200);
    }
}