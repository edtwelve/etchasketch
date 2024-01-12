const container = document.querySelector('.gridContainer');

function gridCreation() {
    for (let j = 1; j <= 16; j++) {
        for (let i = 1; i <= 16; i++) {
            const newDiv = document.createElement('div');
            /* newDiv.textContent = i; */
            container.append(newDiv);
        }
    }
}

gridCreation();