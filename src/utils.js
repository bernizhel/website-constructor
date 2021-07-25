import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "@c/blocks";

export function row(content, styles='') {
    return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(styles={}) {
    if (typeof styles === 'string') {
        return styles;
    }
    const toPair = key => `${key}: ${styles[key]}; `;
    return Object.keys(styles).reduce((acc, key) => {
        return acc + toPair(key);
    }, '');
}

const classes = {
    title: TitleBlock,
    text: TextBlock,
    columns: ColumnsBlock,
    image: ImageBlock,
}

export function block(type) {
    // todo: create more options corresponding the type
    const options =`
        <div className="form-group">
            <input className="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div className="form-group">
            <input className="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
    `;
    return `
        <form name="${type}">
          <h5 style="text-transform: capitalize;">${type}</h5>
           ${options}
          <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr />
  `;
}

export function clearButton() {
    return `
        <form name="clear">
          <button type="submit" class="btn btn-primary btn-sm">Clear the Site</button>
        </form>
  `;
}