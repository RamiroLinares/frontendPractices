import { BaseView } from "./baseview";

export function bootstrap(view: BaseView, node: HTMLElement | null) {
    node?.append(view.render());
}