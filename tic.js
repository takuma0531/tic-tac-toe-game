// game state

let currentPlayer = 'A';

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
  cell.addEventListener('click', clickCell, {once: true})
});


function clickCell() {

}