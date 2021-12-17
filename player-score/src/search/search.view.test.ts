import { SearchView } from './search.view';
import * as JsDom from 'jsdom';
describe("Search View", () => {
    let jsdom: JsDom.JSDOM;
    beforeAll(() => {
        jsdom = new JsDom.JSDOM();
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should render correctly", () => {
        const mockCallback = jest.fn().mockReturnValue('Playe 1')
        const searchView = new SearchView(jsdom.window.document, mockCallback);
        const searchRender = searchView.render()
        expect(searchRender).toBeTruthy();
    });
    it("null callback will render correctly?", () => {
        /* const mockCallback:string= null; //not a callback*/
        const mockCallback = jest.fn().mockReturnValue(null)
        const searchView = new SearchView(jsdom.window.document, mockCallback);
        const searchRender = searchView.render()
        expect(searchRender).toBeTruthy(); //renders anyway with a null callback

    });
    it("callback executed when the input is pressed", async() => {
        const jsdom = new JsDom.JSDOM();
        const mockCallback = jest.fn().mockReturnValue('Playe 1')
         //let callback!: (value: string) => void;
        const searchView =await new SearchView(jsdom.window.document, mockCallback);
        const searchRender = searchView.render()
        //expect(searchRender).toHaveBeenCalled();  // Success! 

                let callbackVerify=jest.spyOn(searchView,'render').mockResolvedValueOnce 
                //jest.useFakeTimers();
                expect(callbackVerify).toHaveBeenCalled();   
    });

});