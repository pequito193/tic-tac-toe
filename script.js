const gameBoard = (() => {
    let symbolOne = 'X';
    let symbolTwo = 'O';
    let holderSymbol = '';

    // Creates array to track each individual square
    const board = [];
    for (let i = 0; i < 9 ; i++) {
        board.push('');
    }

    // Declare the winning combinations on the board array
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    // Creates grid from array
    const play = () => {
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
                    grid.innerText = symbolOne;
                    board[index] = symbolOne;

                    // Change symbol to other player's symbol
                    holderSymbol = symbolTwo;
                    symbolTwo = symbolOne;
                    symbolOne = holderSymbol;

                    // Update text
                    const text = document.querySelector('.text')
                    if (symbolOne === 'X') {
                        text.textContent = "Player 1's turn (X)"
                    } else {
                        text.textContent = "Player 2's turn (O)"
                    }

                    // Check if there is a winner, and reset board if there is
                    winningCombinations.forEach((item, index) => {
                        if (board[item[0]] == 'X' && board[item[1]] == 'X' && board[item[2]] == 'X') {
                            const text = document.querySelector('.text')
                            text.textContent = "Player 1 wins!! Now it is player 2's turn (O)"
                            document.querySelectorAll('.grid').forEach(grid => { 
                                grid.innerText = '';
                                for (let i = 0; i < board.length; i++) {
                                    board[i] = '';
                                }
                            })
                        } else if (board[item[0]] == 'O' && board[item[1]] == 'O' && board[item[2]] == 'O') {
                            const text = document.querySelector('.text')
                            text.textContent = "Player 2 wins!! Now it is player 1's turn(X)"
                            document.querySelectorAll('.grid').forEach(grid => { 
                                grid.innerText = '';
                                for (let i = 0; i < board.length; i++) {
                                    board[i] = '';
                                }
                            })
                        } 
                    })
                }
            })
        })
    }
    return {play, board};
})();

// Add event listener to reset button
const reset = document.querySelector('.reset')
reset.addEventListener('click', e => {
    document.querySelectorAll('.grid').forEach(grid => { 
        grid.innerText = '';
        for (let i = 0; i < gameBoard.board.length; i++) {
            gameBoard.board[i] = '';
        }
    })
})

gameBoard.play();