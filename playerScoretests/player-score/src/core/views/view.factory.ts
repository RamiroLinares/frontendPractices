export class ViewFactory {
    constructor(private iDocument: Document) {
    }

    public createTag(tagName: string, textContent: string | number, classes?: string[]): HTMLElement {
        const element = this.iDocument.createElement(tagName);
        element.textContent = textContent + "";

        if (!classes) {
            return element;
        }

        element.classList.add(...classes);
        return element;
    }
}