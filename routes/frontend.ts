import IController from "./IController";
import { injectable, inject } from "inversify";
import { TYPES } from "../inversify.types";
import { IWebServer } from "../webserver/IWebServer";
import { IRequest, IResponse } from "../webserver/IWebRequest";
import path from "path";

@injectable()
export default class FronendController implements IController {
    public route: string = "/";


    @inject(TYPES.IWebServer)
    private _webServer!: IWebServer;

    initRoutes(): void {
        this._webServer.registerGet(this.route, (request: IRequest, response: IResponse) =>
            this.getFrontEndApp(request, response));
    }
    getFrontEndApp(request: IRequest, response: IResponse) {
        response.sendFile(path.join(__dirname, 'build', 'index.html'));
    }

}