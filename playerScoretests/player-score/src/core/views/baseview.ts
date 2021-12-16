import { injectable } from "inversify";
import { View } from "./view";
import { ViewFactory } from "./view.factory";

@injectable()
export abstract class BaseView implements View {

    protected container: HTMLElement;
    protected viewFactory = new ViewFactory(this.iDocument);

    constructor(protected iDocument: Document) {
        this.container = document.createElement('div');
    }

    render() {
        return this.container;
    }
}