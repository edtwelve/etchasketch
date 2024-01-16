const container = document.querySelector('.gridContainer');
const squares = document.querySelector('.squares');

squares.addEventListener('click', howManySquares);
gridCreation();

function howManySquares() {
    let cuadros = Number(prompt("How many squares per side do you want to display?"));
    gridUpdate(cuadros);
}

function gridUpdate(sqrs) {
    container.innerHTML = '';
    for (let j = 1; j <= sqrs; j++) {
        for (let i = 1; i <= sqrs; i++) {
            const newDiv = document.createElement('div');
            /* newDiv.textContent = i; */
            container.append(newDiv);
        }
    }
}
function gridCreation() {
    for (let j = 1; j <= 16; j++) {
        for (let i = 1; i <= 16; i++) {
            const newDiv = document.createElement('div');
            /* newDiv.textContent = i; */
            container.append(newDiv);
        }
    }
}
