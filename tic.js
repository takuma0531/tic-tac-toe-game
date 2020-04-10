// game state

let currentPlayer = 'A';


changeTurn = () => {
  currentPlayer = currentPlayer === 'A' ? 'B' : 'A'
}

const clickCell = (e) => {

  const clickedCell = e.target;

  if (currentPlayer === 'A') {
    clickedCell.innerHTML = 'o';
  } else {
    clickedCell.innerHTML = 'x';
  }

  changeTurn();
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', clickCell, {once: true})
});
