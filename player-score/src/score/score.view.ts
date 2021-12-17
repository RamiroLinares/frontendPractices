import { ScorePresenter } from "./score.presenter";
import { BaseView } from "../core/views/baseview";
import { IScorePresenter, IScoreView } from "./interfaces";
import { SearchView } from "../search/search.view";
import { ScorePlayer } from "../models/models";
import { PlayerView } from "../player/player.view";
import { IScorePlayerService, SCORE_PLAYER_SERVICE } from "../models/services/scoreplayer.service";
import { HTTP_SERVICE, IHttpService } from "../models/http.service";
import { inject, injectable } from "inversify";

@injectable()
export class ScoreView extends BaseView implements IScoreView {
    private presenter: IScorePresenter;
    private playersContainer: HTMLElement;

    constructor(
        @inject("DOC") iDocument: Document,
        @inject(SCORE_PLAYER_SERVICE) scorePlayerService: IScorePlayerService,
        @inject("FACTORTY<SCORE_PLAYER>") private playerViewFactory: (scorePlayer: ScorePlayer) => PlayerView,
        @inject("FACTORTY<SEARCH_VIEW>") private searchViewFactory: (callback: (value: string) => void) => SearchView,
        @inject(HTTP_SERVICE) private httpService: IHttpService) {
        super(iDocument);
        this.playersContainer = this.viewFactory.createTag('div', '', []);
        this.container.append(this.playersContainer);
        this.presenter = new ScorePresenter(this, scorePlayerService);
        this.container.append(this.searchViewFactory(this.presenter.onSearchChanged.bind(this.presenter)).render());
    }

    renderScore(scores: ScorePlayer[]): void {
        const scoreViews = scores.map((s: ScorePlayer) => this.playerViewFactory(s));
        let toRemove = this.playersContainer.lastChild
        while (toRemove) {
            this.playersContainer.removeChild(toRemove);
            toRemove = this.playersContainer.lastChild;
        }
        this.playersContainer.append(...scoreViews.map(v => v.render()));
    }
}