import { ScoreView } from "./score.view";
import * as JsDom from 'jsdom';
import { IScorePlayerService, ScorePlayerService } from '../models/services/scoreplayer.service';
import { HttpService } from '../models/http.service';
import { ScorePlayer } from "../models/models";
import { PlayerView } from '../player/player.view';
import { SearchView } from "../search/search.view";
//import { ScorePlayer } from '../models/models/index';
import { BaseView } from '../core/views/baseview';
describe("Score View", () => {
    let jsdom: JsDom.JSDOM;
    let scoreService: IScorePlayerService
    let httpService:HttpService
/*      let playerViewFactory: (scorePlayer: ScorePlayer) => PlayerView
    let searchViewFactory: (callback: (value: string) => void) => SearchView;  */
    let scorePlayer:ScorePlayer
    let playerView:PlayerView
    beforeAll(() => {
        jsdom = new JsDom.JSDOM();
        httpService=new HttpService();
        scoreService=new ScorePlayerService(httpService);
        scorePlayer=scoreService.getData()[0]
        playerView= new PlayerView(jsdom.window.document,httpService,scorePlayer);
/*         let pvw=jest.fn()
        jest.spyOn(playerViewFactory, 'playerViewFactory').mockImplementation(()=>{
            return{
                scorePlayer: ScorePlayer;
            }
        }) */
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render correctly", ()=>{
/*         const view = new PlayerView(jsdom.window.document, new HttpService(), { avatar: "", score: 1, username: "To Test"} );
        const asd=jest.fn().mockImplementation(()=>{
            (scorePlayer: ScorePlayer) => PlayerView
        })
        const asd2=jest.fn().mockImplementation(()=>{
            (callback: (value: string) => void) => SearchView; 
        })
        
        const scoreView=new ScoreView(jsdom.window.document,scoreService,asd,asd2,httpService);
        scoreView.render();
        expect(scoreView).toBeTruthy();   */
    })

    it("should render a PlayerView per ScorePlayerObject", ()=>{

        
    })

})