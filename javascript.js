//define constants

const gridContainer = document.querySelector("#grid-container");


function makeGrid(rows, cols) {
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        // cell.textContent = (c + 1);

        console.log(cell.classList);
        gridContainer.appendChild(cell);
    };
};

makeGrid(16, 16);