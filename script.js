const gameBoard = (() => {
    const playerOneSymbol = 'X'
    const computerSymbol = 'O'

    // Creates array to track each individual square
    const board = [];
    for (let i = 0; i < 9 ; i++) {
        board.push('');
    }

    // Creates grid from array
    const play = () =>  {
        const container = document.querySelector('.container')
        board.forEach((item, index) => {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        })

        // Adds event listener that allows each square to be clicked
        Array.from(container.children).forEach((grid, index) => {
            grid.addEventListener('click', e => {
                if (grid.innerText === '') {
                    grid.innerText = playerOneSymbol;
                    board[index] = playerOneSymbol;

                    
                    console.log(board);
                }
            })
        })
    }

    return {play};
})();

gameBoard.play();

