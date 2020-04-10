// game state
let cellState = ['', '', '', '', '', '', '', '', ''];
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


changeTurn = () => {
  currentPlayer = currentPlayer === 'A' ? 'B' : 'A'
}

StateGameCondition = (clickedCell, clickedCellIndex)  => {
  cellState[clickedCellIndex] = currentPlayer;

  currentPlayer === 'A' ? clickedCell.innerHTML = 'o' : clickedCell.innerHTML = 'x';
  console.log(cellState)
}

const clickCell = (e) => {

  const clickedCell = e.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

  StateGameCondition(clickedCell, clickedCellIndex)

  changeTurn();
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', clickCell, {once: true})
});
