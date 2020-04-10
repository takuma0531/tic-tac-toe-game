// game state
let cellPlayerState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'A';
let isFinished = false;

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


const turn = document.querySelector('.turn');
turn.innerHTML = 'A' + '\'s turn!';


const changeTurn = () => {
  currentPlayer = currentPlayer === 'A' ? 'B' : 'A'
}


const StateGameCondition = (clickedCell, clickedCellIndex)  => {
  cellPlayerState[clickedCellIndex] = currentPlayer

  currentPlayer === 'A' ? clickedCell.innerHTML = 'o' : clickedCell.innerHTML = 'x';
}


const checkWinnerExists = (currentPlayer) => {
  return winConditions.some(winCondition => {
    return winCondition.every(cellIndex => {
      return cellPlayerState[cellIndex] === currentPlayer;
    });
  });
}


const checkDraw = () => {
  return cellPlayerState.every(cellValue => {
    return cellValue !== '';
  })
}

const clickCell = (e) => {
  if (isFinished) return;

  turn.innerHTML = currentPlayer + '\'s turn!';

  const clickedCell = e.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

  StateGameCondition(clickedCell, clickedCellIndex)

  // win pattern
  if (checkWinnerExists(currentPlayer)) {
    const result = document.querySelector('.result');
    result.innerHTML = currentPlayer + ' wins!';
    isFinished = true;
    displayRestartButton();
    return;
  }

  // draw pattern
  if (checkDraw()) {
    const result = document.querySelector('.result');
    result.innerHTML = 'draw!';
    isFinished = true;
    displayRestartButton();
    return;
  }

  changeTurn();

}


const startGame = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('click', clickCell, {once: true})
  });
}


const displayRestartButton = () => {
  const newGameButton = document.querySelector('.restart');
  newGameButton.innerHTML = 'New Game';
  newGameButton.addEventListener('click', restart);
}


const restart = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.innerHTML = '';
    startGame();
  });

  // delete the game result from the screen
  const result = document.querySelector('.result');
  result.innerHTML = '';

  // delete new game button from the screen
  const newGameButton = document.querySelector('.restart');
  newGameButton.innerHTML = '';

  // init data state
  cellPlayerState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'A';
  isFinished = false;

}

startGame();