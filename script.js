console.log("connected");
const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const random = document.querySelector('.random');
let showRandom = 0;

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
                let color = getRandomColor();
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
    reset.classList.add('active');
    let input =document.querySelector('.input');
    let userSize = Number(input.value);
    showRandom = 0;

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
random.addEventListener('click',() =>{
    showRandom = 1;
    random.classList.add('active');
});
function getRandomColor(){
    if(showRandom === 1){
        reset.classList.remove('active');
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256); 

        return `rgb(${r},${g},${b})`;
    }else{
        random.classList.remove('active');
        return "black";
    }

};
