import { View } from "../core/views/view";
import { ScorePlayer } from "../models/models";

export interface IScorePresenter {
    onSearchChanged(searchValue: string): void;
}

export interface IScoreView extends View {
    renderScore(scoreViews: ScorePlayer[]): void;
}