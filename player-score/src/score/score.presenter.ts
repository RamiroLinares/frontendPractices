import { IScorePlayerService, ScorePlayerService } from "../models/services/scoreplayer.service";
import { IScorePresenter, IScoreView } from "./interfaces";

export class ScorePresenter implements IScorePresenter {
    constructor(private view: IScoreView, private scorePlayerService: IScorePlayerService) {
        this.initialize();
    }

    onSearchChanged(searchValue: string): void {
        const scoreData = this.scorePlayerService.getDataByUserName(searchValue);
        this.view.renderScore(scoreData);
    }

    initialize() {
        const scoreData: any = this.scorePlayerService.getData();
        this.view.renderScore(scoreData);
    }
}