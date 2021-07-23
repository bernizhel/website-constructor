const model = [
    {type: 'title', value: 'Hello, Constructor!!!'},
    {type: 'text', value: 'Lorem ipsum mono rice mole van truck auto sample.'},
    {type: 'columns', value: ['11111', '22222', '33333', '4']},
    {type: 'image', value: './assets/image.png'},
]

const $site = document.querySelector('#site');
model.forEach(block => {
    let html = '';
    if (block.type === 'title') {
        html = title(block);
    } else if (block.type === 'text') {
        html = text(block);
    } else if (block.type === 'columns') {
        html = columns(block);
    } else if (block.type === 'image') {
        html = image(block);
    }
    $site.insertAdjacentHTML('beforeend', html);
});

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
            <img src="${block.value}" alt="">
        </div>
    `;
}