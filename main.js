const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const w80 = (w / 100) * 80;

const gridContainer = document.querySelector('#grid-container')
const createRows = colRows => {
    for(let i = 0; i < colRows; i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'container pixel-row center');
        div.setAttribute('id', `row${i}`);
        gridContainer.appendChild(div);
    }
}
const removeRows = () => {
    pixelRow.forEach(row => {
        row.remove()
        row.attributes.classList
    });
  
}
createRows(16);

const pixelRow = document.querySelectorAll('.pixel-row');
const createSquares = (colRows) => {
    for(let i = 0; i < pixelRow.length; i++){
        for(let col = 0; col < colRows ; col++){
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('id', `row${i}-column${col}`);
            pixelRow[i].appendChild(square);
        }
    }
}
createSquares(16);
const squares = document.querySelectorAll('.square');

const sizeSquares = colRows => {
    let squareWidth = (w80 / colRows) / 2;
    
    if(colRows >= 20){
        squareWidth = (w80 / colRows);
    }
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
sizeSquares(16)


const clearBtn = document.querySelector('#clear-btn')
const clearBoard = () => {
    squares.forEach(square =>{
        square.classList.remove('pixellated');
    });
}
clearBtn.addEventListener('click', clearBoard);

const submitBtn = document.querySelector('#submit-btn');
const gridSize = document.querySelector('#gsize');
const gridForm = document.querySelector('#grid-form');



submitBtn.addEventListener('click', () => {
    const gridValue = Number(gridSize.value)

    if(isNaN(gridValue)){
        alert('Please enter a number Value e.g 10')
    }
    else if (gridValue > 100 || gridValue < 10){
        alert('Please enter a number between 10 - 100')   
    }
    else{

    }

});





