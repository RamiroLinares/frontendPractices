import { HttpService } from "./http.service";

describe("HttpService", () => {
    it("should return a valid promise when a post request with valid data.", () => {
        const httpService = new HttpService();
        const response = httpService.post(2);

        return expect(response).resolves.toBe(2);
    });

    it("should return a valid promise when a post request with valid data version 2.", () => {
        const httpService = new HttpService();
        const response = httpService.post(2);

        return response.then(data => {
            expect(data).toBe(2);
        });
    });

    it("should return a valid promise when a post request with valid data version 3.", async () => {
        const httpService = new HttpService();
        const response = await httpService.post(2);

        expect(response).toBe(2);
    });

    it("should thow an Error for null or undefined data.", () => {
        const httpService = new HttpService();
        const response = httpService.post(null);

        return expect(response).rejects.toBe("Fail no data found.");
    });

    it("should execute the call after some time", (done) => {
        const httpService = new HttpService();

        httpService.functionWhatWorkWithACallback((data) => {
            expect(data).toBe(1);
            done();
        });
    });
});