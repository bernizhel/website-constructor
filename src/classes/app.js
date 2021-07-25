import {Site} from "@c/site";
import {Sidebar} from "@c/sidebar";

export class App {
    constructor(model) {
        this.model = model;
    }

    init() {
        const site = new Site('#site');

        site.render(this.model);

        const updateCallback = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        };

        const clearCallback = () => {
            this.model = [];
            site.clear();
        }

        new Sidebar('#panel', updateCallback, clearCallback);
    }
}