// Set the color of the target with the color selected in the input color tag.
function setCellColor(evt) {
    const inputColor = document.getElementById("colorPicker").value;
    const cell = document.getElementById(evt.target.id);
    cell.style.backgroundColor = inputColor;
}

// Create the grid and assign event listener functions to the cells onclick event.
function makeGrid(rows, cells) {
    // Your code goes here!

    const table = document.createElement('table');

    // counter increased and used as table data id.
    let count = 0;

    // Loop for creating table rows
    for (let i = 0; i < rows; i++) {

        const row = table.insertRow(-1);
        // Loop for creating row cells
        for (let j = 0; j < cells; j++) {
            count++;
            const cell = row.insertCell(-1);
            cell.setAttribute('id', count);
            row.appendChild(cell);
        }

    }

    // Get the table object on the html document.
    const pixelCanvas = document.getElementById("pixelCanvas");

    // Assign the html content from JavaScript table to the html tag on the document.
    pixelCanvas.innerHTML = table.innerHTML;

    // Get all cells in the table with pixelCanvas id
    const tableCells = document.querySelectorAll('#pixelCanvas td');

    // Add the set color event listener function to each cell's on click event.
    tableCells.forEach(tableCell => tableCell.addEventListener("click", setCellColor));

    return false;
}


