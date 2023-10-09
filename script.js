console.log("connected");
const container = document.querySelector('.container');
const reset = document.querySelector('.reset');

function createGrid(gridSize){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for(let i=0;i<gridSize;i++){
        const rowGrid = document.createElement('div');
        rowGrid.classList.add('grid-row');
        for(let j=0;j<gridSize;j++){
            const width = 960/gridSize;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${width}px`;
            gridBox.style.height = `${width}px`;
            //event added for color change while hover
            gridBox.addEventListener('mouseenter',()=>{
                gridBox.style.backgroundColor = 'black';
            });
            rowGrid.appendChild(gridBox);
        }
        wrapper.appendChild(rowGrid);
    }
    container.appendChild(wrapper);
};


reset.addEventListener('click',()=>{
    let input =document.querySelector('.input');
    let userSize = Number(input.value);

    while(userSize>100){
        alert("Give the value less than 100");
        userSize=16;
        input.value='';
    }
    const wrapper = document.querySelector('.wrapper');

    if(!wrapper){
        createGrid(userSize);
    }else{
        wrapper.remove();
        createGrid(userSize);
    }
})