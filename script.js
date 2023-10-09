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
                let color ="rgba(40, 50, 70,0.7)";
                gridBox.style.backgroundColor = color;
            });
            rowGrid.appendChild(gridBox);
        }
        wrapper.appendChild(rowGrid);
    }
    container.appendChild(wrapper);
};
createGrid(16);

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
});