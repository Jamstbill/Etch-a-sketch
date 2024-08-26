const container = document.querySelector('.container');
let gridSize;
let selectedColour = 'white';

const red = document.querySelector('.red');
red.addEventListener('click', () => {
    selectedColour = 'red';
})
const blue = document.querySelector('.blue');
blue.addEventListener('click', () => {
    selectedColour = 'blue';
})
const yellow = document.querySelector('.yellow');
yellow.addEventListener('click', () => {
    selectedColour = 'yellow';
})
const green = document.querySelector('.green');
green.addEventListener('click', () => {
    selectedColour = 'green';
})
const pink = document.querySelector('.pink');
pink.addEventListener('click', () => {
    selectedColour = 'pink';
})
const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    selectedColour = 'white';
})
const purple = document.querySelector('.purple');
purple.addEventListener('click', () => {
    selectedColour = 'purple';
})

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    gridSize = document.querySelector('.input').value;
    if(gridSize <= 100){
        drawGrid(gridSize);
    } else
    alert('Grid can only be 100 * 100');
})

function drawGrid(gridSize = 16){
    container.innerHTML = '';
    const squareSize =  container.clientWidth / gridSize;

    for (i = 0; i < gridSize * gridSize; i++){
        let chosenColour;
        const square = document.createElement('div');

        square.className = 'square';
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = selectedColour;
        });
    }
}

drawGrid(gridSize);


