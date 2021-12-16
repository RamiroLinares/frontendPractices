import { injectable } from "inversify";

export const HTTP_SERVICE = Symbol("HTTPSERVICE");

export interface IHttpService {
    get<TResponse>(data: TResponse[]): TResponse[];
    post<TResponse>(data: TResponse): Promise<TResponse>;
}

@injectable()
export class HttpService implements IHttpService {
    get<TResponse>(data: TResponse[]): TResponse[] {
        console.log(`HttpService was called with ${data.length} items.`)
        return [...data, ...data];
    }

    post<TResponse>(data: TResponse): Promise<TResponse> {
        const promise = new Promise<TResponse>((resolve, reject) => {
            setTimeout(() => {
                if (!data) {
                    reject("Fail no data found.")
                }
                resolve(data);
            }, 100);
        });
        return promise;
    }

    functionWhatWorkWithACallback(callback: (data: any) => void): void {
        setTimeout(() => {
            callback(1);
        }, 200);
    }
}