// Set the color of the target with the color selected in the input color tag.
function setCellColor(evt) {
    var inputColor = document.getElementById("colorPicker").value;
    var cell = document.getElementById(evt.target.id);
    cell.style.backgroundColor = inputColor;
}

// Create the grid and assign event listener functions to the cells onclick event.
function makeGrid(rows, cells) {
    // Your code goes here!

    var table = document.createElement('table');

    // counter increased and used as table data id.
    var count = 0;

    // Loop for creating table rows
    for (var i = 0; i < rows; i++) {

        var row = table.insertRow(-1);
        // Loop for creating row cells
        for (var j = 0; j < cells; j++) {
            count++;
            var cell = row.insertCell(-1);
            cell.setAttribute('id', count);
            row.appendChild(cell);
        }

    }

    // Get the table object on the html document.
    var pixelCanvas = document.getElementById("pixelCanvas");

    // Assign the html content from JavaScript table to the html tag on the document.
    pixelCanvas.innerHTML = table.innerHTML;

    // Get all cells in the table with pixelCanvas id
    var tableCells = document.querySelectorAll('#pixelCanvas td');

    // Add the set color event listener function to each cell's on click event.
    tableCells.forEach(tableCell => tableCell.addEventListener("click", setCellColor));

    return false;
}


