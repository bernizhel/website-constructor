function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `;
}

function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `;
}

function columns(block) {
    let html = block.value.map(v => `<div class="col-sm">${v}</div>`).join('');
    return `
        <div class="row">
            ${html}
        </div>
    `;
}

function image(block) {
    return `
        <div class="row">
            <img src="${block.value}" alt="no_image">
        </div>
    `;
}

export {title, text, columns, image};