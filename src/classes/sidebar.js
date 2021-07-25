import {block, clearButton} from '@/utils';
import {TextBlock, TitleBlock} from "@c/blocks";


export class Sidebar {
    constructor(selector, updateCallback, clearCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback;
        this.clear = clearCallback;
        this.init();
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.submit.bind(this));
    }

    get template() {
        return [
            block('title'),
            block('text'),
            // block('columns'),
            // block('image'),
        ].join('') + clearButton();
    }

    submit(event) {
        event.preventDefault();
        if (event.target.name === 'clear') {
            this.clear();
            return;
        }
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        const newBlock = type === 'text'
            ? new TextBlock(value, {styles})
            : new TitleBlock(value, {styles});
        this.update(newBlock);
        event.target.value.value = '';
        event.target.styles.value = '';
    }
}
