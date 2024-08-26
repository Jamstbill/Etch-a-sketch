const container = document.querySelector('.container');
const gridSize = 50;
const squareSize =  container.clientWidth / gridSize;

for (i = 0; i < gridSize * gridSize; i++){
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
}


