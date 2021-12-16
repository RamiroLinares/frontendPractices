import { PlayerView } from "./player.view";
import * as JsDom from 'jsdom';
import { HttpService } from "../models/http.service";

describe('Player View', () => {
    it('should render with Score Player', () => {
        const jsdom = new JsDom.JSDOM();
        const view = new PlayerView(jsdom.window.document, new HttpService(), { avatar: "", score: 1, username: "To Test"} );
        const viewRenderer = view.render();
        
        expect(viewRenderer).toBeTruthy();
    });
    
    it('should throw and Error when the player score is undefined', () => {
        const jsdom = new JsDom.JSDOM();

        expect(() => {
            const view = new PlayerView(jsdom.window.document, new HttpService(), undefined as any);
            view.render();
        }).toThrowError();
    });

    it('should sum three number', () => {
        expect(1 + 2 + 0).toBe(3);
    });
});