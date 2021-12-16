import { HttpService, IHttpService } from "../http.service";
import { ScorePlayerService } from "./scoreplayer.service";

// Dummy - Simple Values
// Fakes - 
// Stubs - 
// Mocks - Dinamicamente puedes el valor por cada test
// Spies - Guarda Informacion sobre el uso que tiene.

describe("Score Player Service", () => {
    let httpService: IHttpService;

    beforeAll(() => {
        httpService = new HttpService();
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return Scores Player Information", () => {
        const getSpy = jest.spyOn(httpService, 'get').mockReturnValue([{}]);
        const sut = new ScorePlayerService(httpService);

        const scores = sut.getData();
        expect(scores.length).toBeGreaterThanOrEqual(1);
        expect(getSpy).toBeCalledTimes(1);
    });

    it("should Throw and Error if data has not elements", () => {
        jest.spyOn(httpService, 'get').mockReturnValue([]);
        const sut = new ScorePlayerService(httpService);

        expect(() =>  sut.getData()).toThrowError('No Data Found');
    });

    it("should return an Empty Object when HTTP get methos throws and Error", () => {
        jest.spyOn(httpService, 'get').mockImplementationOnce(() => { throw Error("Internet Error"); });
        const sut = new ScorePlayerService(httpService);

        const scores = sut.getData();

        expect(scores.length).toBe(0);
    }); 
    
    it("should Update the Score Player", () => {
        const spyGet = jest.spyOn(httpService, 'get');

        const sut = new ScorePlayerService(httpService);

        sut.updateScore({ score: 1, username: "", avatar: "" });

        expect(spyGet).toBeCalledTimes(3);
    });

    it("should Throw and Error whene Update is called with a null value.", () => {
        const spyGet = jest.spyOn(httpService, 'get');

        const sut = new ScorePlayerService(httpService);

        expect(() => sut.updateScore(null as any)).toThrowError();
        expect(spyGet).toHaveBeenCalledTimes(0);
    });
});