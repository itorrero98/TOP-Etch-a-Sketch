const CONTAINER = document.getElementById('container');
//16x16 grid
const GRID_X_SIZE = 16; 
const GRID_Y_SIZE = 16;
CONTAINER.style.gridTemplateColumns = `repeat(${GRID_X_SIZE}, auto)`;
let createGrid = () => {
    for(let i = 0; i < (GRID_X_SIZE * GRID_Y_SIZE); i++) {
        let cell = document.createElement('div');
        cell.classList += 'cell';
        CONTAINER.appendChild(cell);
    }
}

createGrid();

const GRID = document.querySelectorAll('.cell');

GRID.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
        e.target.classList.add('hovered');
    })
})

