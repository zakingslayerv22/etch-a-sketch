//define

const gridContainer = document.querySelector("#grid-container");
let rows = document.querySelectorAll(".rows");


//create columns
function createColumns(value) {
    for (let i = 0; i < value; i++) {
        let column = document.createElement("div");
        gridContainer.appendChild(column).className = "columns";
        columns = document.querySelectorAll(".columns"); 
    }
}


function createRows(rowNum) {
    let columns = document.querySelectorAll(".columns");
    for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < rowNum; j++) {
            let row = document.createElement("div");
            columns[j].appendChild(row).className = "rows";
        }
    }
}



function createGrid() {
    createColumns(16);
    createRows(16);
    backgroundColorOnMouseOver();
}

createGrid();

// window.addEventListener('load', () => {
//     makeGrid(16)
// });


 

function backgroundColorOnMouseOver() {
    for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener ('mouseover', (event) => {
        event.target.classList.add("blue-background");
    });
}
};





const eraserButton = document.querySelector("#eraser");

function eraseBackgroundColor() {
    eraserButton.addEventListener("click", (event) => { 
        for (let i = 0; i < columns.length; i++) {
            
            columns[i].classList.remove("blue-background");
        }
    });
}

eraseBackgroundColor();



function newUserGrid(){
    let userPrompt = prompt("How many rows would you like?", 100);
    if ((userPrompt > 100) || (userPrompt < 1) ) {
        confirm("Please enter a number between 1 and 100");
    }else {
        makeGrid(userPrompt);
        
    }
}

// newUserGrid();