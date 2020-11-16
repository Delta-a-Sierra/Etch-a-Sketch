const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const w80 = (w / 100) * 80;

const gridContainer = document.querySelector('#grid-container')
const clearBtn = document.querySelector('#clear-btn')
const submitBtn = document.querySelector('#submit-btn');
const gridSize = document.querySelector('#gsize');
const gridForm = document.querySelector('#grid-form');

const createRows = colRows => {
    for(let i = 0; i < colRows; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'container pixel-row center');
        div.setAttribute('id', `row${i}`);
        gridContainer.appendChild(div);
    }
}

const createSquares = (colRows) => {
    const pixelRow = document.querySelectorAll('.pixel-row');
    for(let i = 0; i < pixelRow.length; i++){
        for(let col = 0; col < colRows ; col++){
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('id', `row${i}-column${col}`);
            pixelRow[i].appendChild(square);
        }
    }
}

const sizeSquares = colRows => {
    const squares = document.querySelectorAll('.square');
    let squareWidth = (w80 / colRows) / 2;
    squares.forEach(square => {
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
    });
    squares.forEach(square => {
        square.addEventListener('mouseenter', () =>{
            square.classList.add('pixellated');
        });
    });
}

const removeRows = () => {
    const removeRows = document.querySelectorAll('.pixel-row');
    removeRows.forEach(row => {
        row.remove()
        row.attributes.classList
    });
}

const clearBoard = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square =>{
        square.classList.remove('pixellated');
    });
}

clearBtn.addEventListener('click', clearBoard);

submitBtn.addEventListener('click', () => {
    const gridValue = Number(gridSize.value)
    if(isNaN(gridValue)){
        alert('Please enter a number Value e.g 10')
    }
    else if (gridValue > 100 || gridValue < 10){
        alert('Please enter a number between 10 - 100')   
    }
    else{
        removeRows()
        createRows(gridValue);
        createSquares(gridValue);
        sizeSquares(gridValue);
    }
});

createRows(16);
createSquares(16);
sizeSquares(16)

