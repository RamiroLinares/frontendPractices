import { injectable } from "inversify";
import { BaseView } from "../core/views/baseview";
import { ISearchView } from "./interfaces";

@injectable()
export class SearchView extends BaseView implements ISearchView {
    constructor(iDocument: Document, callback: (value: string) => void) {
        super(iDocument);
        const input = this.viewFactory.createTag('input', '', ['search']) as HTMLInputElement;
        input.addEventListener('keyup', function () {
            callback(input.value);
        });
        this.container.append(input);
    }
}