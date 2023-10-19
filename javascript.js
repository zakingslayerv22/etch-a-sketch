//define constants

const gridContainer = document.querySelector("#grid-container");



function makeGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        // cell.textContent = (c + 1);

        // console.log(cell.classList);
        gridContainer.appendChild(cell);
    };
};

makeGrid(16, 16);


const gridItems = document.querySelectorAll(".grid-item");

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener ('mouseover', (event) => {
        event.target.classList.add("blue-background");
    });
}
