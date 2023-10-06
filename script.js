console.log("connected");
const container = document.querySelector('#container');

let size = 16;

for(let i=0;i<size;i++){
    const colDiv = document.createElement('div');
    colDiv.id = "col"+(i+1);
    for(let j=0;j<size;j++){
        const newDiv = document.createElement('div');
        newDiv.id = 'row'+(i+1);
        newDiv.textContent = "DIV"+i;

        colDiv.appendChild(newDiv)
    }
    container.appendChild(colDiv);
}