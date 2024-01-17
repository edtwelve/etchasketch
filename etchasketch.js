const container = document.querySelector('.gridContainer');
const cuadros = document.querySelector('.cuadros')
const squares = document.querySelector('.squares');
const reset = document.querySelector('.reset');
const submit = document.querySelector('.submit');


gridCreation();

squares.addEventListener('click', howManySquares);
function howManySquares() {
    let cuadros = Number(prompt("How many squares per side do you want to display?"));
    gridCreation(cuadros);
}

/* submit.addEventListener('click', gridCreation(size));
*/
submit.addEventListener('click', () => { //Receive value from input field
    let size = cuadros.value;
    resetGrid();
    gridCreation(size);
})

reset.addEventListener('click', resetGrid); //Empty grid
function resetGrid() {
    container.innerHTML = '';
}

function divCreation(size) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;

    return newDiv;
}

function gridCreation(sqrs=16) { //Create the grid
    for (let j = 0; j < sqrs; j++) {
        for (let i = 0; i < sqrs; i++) {
            /* const newDiv = document.createElement('div'); */
            /* newDiv.textContent = i; */
            container.append(divCreation(container.clientWidth / sqrs));
        }
    }
}


/* function gridUpdate(sqrs) {
    resetGrid();
    for (let j = 1; j <= sqrs; j++) {
        for (let i = 1; i <= sqrs; i++) {
            const newDiv = document.createElement('div');
            //newDiv.textContent = i;
            container.append(newDiv);
        }
    }
}
 */