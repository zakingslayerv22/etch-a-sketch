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



function createGrid(value) {
    createColumns(value);
    createRows(value);
    backgroundColorOnMouseOver();
}

createGrid(16)


function newUserGrid(value){
    // let userPrompt = prompt("Enter a number from 1 - 100", 100)
    value = 10
    
    createColumns(value)
    createRows(value);
}

// newUserGrid(10);


window.addEventListener('load', () => {
    // createGrid()
});


 

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





// newUserGrid();