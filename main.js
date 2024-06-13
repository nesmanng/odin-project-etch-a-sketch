function adjustGrid() {
    // Access the container element
    const container = document.querySelector('.container');

    // Check if there is a grid
    const existingGrid = document.querySelectorAll('.grid-item');

    // Initialize 16x16 grid if no grid exists
    if (!existingGrid.length) {

        const gridSize = 16;

        gridDimensions = container.clientWidth / gridSize;
        for (let i = 0; i < gridSize ** 2; i++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-item');
            gridBox.style.width = `${gridDimensions}px`;
            gridBox.style.height = `${gridDimensions}px`;

            // Add event listener to change color on hover
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = randomiseColor();
            });
            container.appendChild(gridBox);
        }

    } else {

        const gridSize = prompt('Enter new grid size: ');

        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert('Please enter a valid number between 1 and 100');
            return;
        }

        container.innerHTML = '';

        if (gridSize) {
            const gridBox = document.createElement('div');
            const gridDimensions = container.clientWidth / gridSize;

            for (let i = 0; i < gridSize ** 2; i++) {
                const gridBox = document.createElement('div');
                gridBox.classList.add('grid-item');
                gridBox.style.width = `${gridDimensions}px`;
                gridBox.style.height = `${gridDimensions}px`;
                
                // Add event listener to change color on hover
                gridBox.addEventListener('mouseover', () => {
                    gridBox.style.backgroundColor = randomiseColor();
                });
                container.appendChild(gridBox);
            }
        }

    }
}

function randomiseColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

adjustGrid();