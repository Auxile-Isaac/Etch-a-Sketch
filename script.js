function createGrid() {
    var gridSize = prompt("Enter the number of squares per side (maximum 100):");
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
      alert("Invalid input. Please enter a number between 1 and 100.");
      return;
    }
  
    var container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous grid
  
    var squareSize = 960 / gridSize;
  
    for (var i = 0; i < gridSize * gridSize; i++) {
      var square = document.createElement("div");
      square.className = "square";
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px";
      container.appendChild(square);
    }
  }
  