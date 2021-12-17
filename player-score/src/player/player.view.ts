import { ScorePlayer } from "../models/models";
import { BaseView } from "../core/views/baseview";
import { IPlayerPresenter, IPlayerView } from "./interfaces";
import { PlayerPresenter } from "./player.presenter";
import { HTTP_SERVICE, IHttpService } from "../models/http.service";
import { inject, injectable } from "inversify";

@injectable()
export class PlayerView extends BaseView implements IPlayerView{
    private presenter: IPlayerPresenter;

    private avatar: HTMLImageElement;
    private name: HTMLHeadingElement;
    private score: HTMLParagraphElement;
    private deleteBtn: HTMLButtonElement;
    
    constructor(
        @inject("DOC") iDocument: Document,
        @inject(HTTP_SERVICE) private httpService: IHttpService,
        scorePlayer: ScorePlayer) {
            
        super(iDocument);
        this.presenter = new PlayerPresenter(this, httpService);
        this.avatar = iDocument.createElement('img');

        this.name = this.viewFactory.createTag('h4', scorePlayer.username,  ['player-one']) as HTMLHeadingElement;
        this.score = this.viewFactory.createTag('p', scorePlayer.score,  ['player-score']) as HTMLParagraphElement;
        this.deleteBtn = this.viewFactory.createTag('button', '',  []) as HTMLButtonElement;

        this.container.append(this.avatar, this.name, this.score, this.deleteBtn);
        this.container.classList.add('player');
    }
}