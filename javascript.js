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
    rainbowOnMouseOver();
    eraseBackgroundColor();
}


function newUserGrid(value){

    const newGridButton = document.querySelector("#new-grid-button");
    newGridButton.addEventListener('click', (event) => {
        //i did not have to explicitly convert it to a 
        //number because isNaN converts to a number first (if necessary)
        value = +prompt("Enter a value from 2 to 100", 50);

        if (isNaN(value) == true){
            alert("Please enter a number");
            // console.log(typeof value);
        } else if (value <= 1 || value > 100) {
            alert("Enter a value from 2 to 100");
        }else {
            //reset the grid
            gridContainer.textContent = "";
            //create the new grid
            createGrid(value)
        }
    });
    
}

newUserGrid();


window.addEventListener('load', () => {
    createGrid(15)
});


 

function backgroundColorOnMouseOver() {
    for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener ('mouseover', (event) => {
        event.target.classList.add("blue-background");
    });
}
};

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    color = `rgb(${r}, ${g}, ${b})`;
    // console.log(color);
    return color;
}
getRandomColor();

function rainbowOnMouseOver() {
    // columns = document.querySelectorAll(".columns");

    const rainbowColorButton = document.querySelector("#rainbow-button");
    rainbowColorButton.addEventListener('click', (event) => {

        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener ('mouseover', (event) => {
                //this adds inline styles and that is the reason
                //the eraser below
                //event.target.classList.add("white-background");
                //does not work
                event.target.style.backgroundColor = getRandomColor();
            });
        }
    })

}

// rainbowOnMouseOver();


function eraseBackgroundColor() {
    // columns = document.querySelectorAll(".columns");
    const eraserButton = document.querySelector("#eraser");
    eraserButton.addEventListener("click", (event) => { 
        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener ('mouseover', (event) => {
                
                // event.target.classList.add("white-background");

                event.target.style.backgroundColor = "white";
            });
        }
    });
}

// eraseBackgroundColor();




