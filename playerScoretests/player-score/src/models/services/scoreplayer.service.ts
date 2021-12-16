import { inject, injectable } from "inversify";
import { HTTP_SERVICE, IHttpService } from "../http.service";
import { ScorePlayer } from "../models";

export const SCORE_PLAYER_SERVICE = Symbol("SCOREPLAYERSERVICE");

export interface IScorePlayerService {
    getData(): ScorePlayer[];
    getDataByUserName(valueToSearch: string): ScorePlayer[];
    updateScore(scorePlayer: ScorePlayer): void;
}

@injectable()
export class ScorePlayerService implements IScorePlayerService {
    constructor(@inject(HTTP_SERVICE) private httpService: IHttpService) {
    }
    
    updateScore(scorePlayer: ScorePlayer): void {
        if (scorePlayer === null) {
            throw Error("Invalida value to Update.")
        }

        this.httpService.get([]);
        this.httpService.get([]);
        this.httpService.get([]);
    }

    public getData(): ScorePlayer[] {
        let response: ScorePlayer[];
        try {
            response = this.httpService.get<ScorePlayer>(
                [
                    {
                        username: 'Playe 1',
                        avatar: '', score: 1231
                    },
                    {
                        username: 'Playe 2',
                        avatar: '',
                        score: 32432
                    },
                    {
                        username: 'Playe 3',
                        avatar: '',
                        score: 22
                    }
                ]
            );
        } catch (err) {
            return [];
        }

        if (response.length === 0) {
            throw Error("No Data Found");
        }

        return response;
    }

    public getDataByUserName(valueToSearch: string): ScorePlayer[] {
        return this.getData().filter((sp: ScorePlayer) => sp.username.indexOf(valueToSearch) > -1)
    }
}