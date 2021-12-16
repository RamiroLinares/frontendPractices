import { IHttpService } from "../models/http.service";
import { IPlayerPresenter, IPlayerView } from "./interfaces";

export class PlayerPresenter implements IPlayerPresenter {
    constructor(private view: IPlayerView, private httpService: IHttpService) {
    }
}