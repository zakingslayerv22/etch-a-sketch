//define

const gridContainer = document.querySelector("#grid-container");
let rows = document.querySelectorAll(".rows");
let gridDimension = document.querySelector("#slider-value");



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
    gridDimension.textContent = `${value} x ${value}`;
    newUserGrid();
    backgroundColorOnMouseOver();
    rainbowOnMouseOver();
    eraseBackgroundColor();
    increaseOpacity();
    clearGrid()
}


function newUserGrid(value){

    const newGridSlider = document.querySelector("#slider");
    gridDimension = document.querySelector("#slider-value");
    newGridSlider.addEventListener('change', (event) => {

        value = newGridSlider.value;
        gridContainer.textContent = "";
        createGrid(value)
        gridDimension.textContent = `${value} x ${value}`;

    });
    
}




window.addEventListener('load', () => {
    createGrid(15)
});




function backgroundColorOnMouseOver() {
    const defaultColorButton = document.querySelector("#default-color-button");
    defaultColorButton.addEventListener('click', () => {
        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener ('mouseover', (event) => {
                event.target.style.backgroundColor = "green";
            });
        }
        
    });
};




function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //why wasn't color declared first?
    color = `rgb(${r}, ${g}, ${b})`;
    return color;
}
getRandomColor();

function rainbowOnMouseOver() {
    const rainbowColorButton = document.querySelector("#rainbow-button");
    rainbowColorButton.addEventListener('click', (event) => {

        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener ('mouseover', (event) => {
                //this adds inline styles and that is the reason
                //the eraser below
                //event.target.classList.add("white-background");
                //does not work
                let target = event.target;
                target.style.backgroundColor = getRandomColor();
            });
        }
    })

}


function eraseBackgroundColor() {
    // columns = document.querySelectorAll(".columns");
    const eraserButton = document.querySelector("#eraser-button");
    eraserButton.addEventListener("click", (event) => { 
        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener ('mouseover', (event) => {
                const target = event.target;
                if (target.classList.contains("increase-opacity-background")) {
                    target.classList.remove("increase-opacity-background");
                }
                target.style.backgroundColor = "transparent";
 
            });
        }
    });
}

//clear grid

function clearGrid() {
    
    const resetButton = document.querySelector("#clear-button");
    rows = document.querySelectorAll(".rows");
    resetButton.addEventListener('click', (event) => {
        for (let i = 0; i < rows.length; i++) {
            rows[i].style.backgroundColor = "transparent";
        }
    });
}



//Increase Opacity

function increaseOpacity () {
    const increaseOpacityButton = document.querySelector("#grey-scale-button");
    increaseOpacityButton.addEventListener('click', (event) => {
        columns.forEach(column => {
            column.addEventListener('mouseover', (event) => {
                const target = event.target;
                target.classList.add("increase-background-opacity");
                target.style.backgroundColor = "black";
                target.style.opacity = (parseFloat(target.style.opacity) || 0) + 0.1;
            });
        });
    });
}
