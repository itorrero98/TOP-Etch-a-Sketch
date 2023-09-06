const GRID_CONTAINER = document.getElementById('grid-container');
const COLOR_SELECTOR = document.getElementById('input-color');
const MODE_SELECTOR = document.getElementById('color-mode');
const CLEAR_BTN = document.getElementById('clear-btn');
const GRID_SIZE_VAL = document.getElementById('grid-size');
const GRID_SIZE_TEXT = document.getElementById('grid-size-text');
//16x16 intial grid
let gridX = GRID_SIZE_VAL.value; 
let gridY = GRID_SIZE_VAL.value;

GRID_CONTAINER.style.gridTemplateColumns = `repeat(${gridX}, 1fr)`;
GRID_CONTAINER.style.gridTemplateRows = `repeat(${gridY}, 1fr)`;

window.onload = (event) => {
    createGrid();
};
CLEAR_BTN.addEventListener('click', () => {
    generateNewGrid();
});
GRID_SIZE_VAL.addEventListener('change', (e) => {
    let val = e.target.value;
    gridX = val;
    gridY = val;
    GRID_SIZE_TEXT.innerText = `${val} x ${val}`
    GRID_CONTAINER.style.gridTemplateColumns = `repeat(${gridX}, 1fr)`;
    GRID_CONTAINER.style.gridTemplateRows = `repeat(${gridY}, 1fr)`;
    generateNewGrid();
});

//Used to update the grid size text so user knows size before letting go of slider
GRID_SIZE_VAL.addEventListener('mousemove', (e) => {
    if(e.target.value === gridX) return;
    let val = e.target.value;
    GRID_SIZE_TEXT.innerText = `${val} x ${val}`
});

let generateNewGrid = () => {
    GRID_CONTAINER.replaceChildren();
    createGrid();
}

let createGrid = () => {
    //Create grid of divs based on grid variable size
    for(let i = 0; i < (gridX * gridY); i++) {
        let cell = document.createElement('div');
        cell.classList += 'cell';
        GRID_CONTAINER.appendChild(cell);
    }

    const GRID = document.querySelectorAll('.cell');
    let clicked = false;
    //Every cell needs it's own event listeners to know when it's been hovered / clicked on to start drawing
    //Clicked lets us know if it's a "drag" to continue coloring
    GRID.forEach((cell) => {
        cell.addEventListener('mousedown', (e) => {
            clicked = true;
            setElementColor(e.target);
        })
        cell.addEventListener('mouseover', (e) => {
            if(clicked) {
                setElementColor(e.target);
            }
        })
        cell.addEventListener('mouseup', (e) => {
            clicked = false;
        })
    })
}

let setElementColor = (element) => {
    switch(MODE_SELECTOR.value) {
        case 'erase':
            element.style.backgroundColor = 'white';
            break;
        case 'rainbow':
            element.style.backgroundColor = `#${generateColor()}`;
            break;
        case 'color-pick':
        default:
            element.style.backgroundColor = COLOR_SELECTOR.value;
    }
}

//Generates random hex code for random color
let generateColor = () => {
    return Math.floor(Math.random()*16777215).toString(16); 
}
