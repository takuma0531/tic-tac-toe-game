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

  const clickedCell = e.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

  StateGameCondition(clickedCell, clickedCellIndex)

  // win or draw?
  if (checkWinnerExists(currentPlayer)) {
    const result = document.querySelector('.result');
    result.innerHTML = currentPlayer + ' wins!';
    isFinished = true;
    return;
  }

  if (checkDraw()) {
    const result = document.querySelector('.result');
    result.innerHTML = 'draw!';
    isFinished = true;
    return;
  }

  changeTurn();
}


const restart = () => {
  // restart game
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', clickCell, {once: true})
});
