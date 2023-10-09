console.log("connected");
const container = document.querySelector('.container');
let sizeOfGrid = 2;

function createGrid(gridSize){
    for(let i=0;i<gridSize;i++){
        const rowGrid = document.createElement('div');
        rowGrid.classList.add('grid-row');
        for(let j=0;j<gridSize;j++){
            const width = 960/sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${width}px`;
            gridBox.style.height = `${width}px`;
            rowGrid.appendChild(gridBox);
        }
        container.appendChild(rowGrid);
    }
};

createGrid(sizeOfGrid);