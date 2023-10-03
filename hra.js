let currentPlayer = 'circle'
const navigationIconeElement = document.querySelector('.navigation__icone')


const playerFunction = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle')
    currentPlayer = 'cross'
    navigationIconeElement.src = 'images/cross.svg'
  } else {
    event.target.classList.add('board__field--cross')
    currentPlayer = 'circle'
    navigationIconeElement.src = 'images/circle.svg'
  }
  
}

document.querySelector('.game__array:nth-child(1)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(2)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(3)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(4)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(5)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(6)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(7)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(8)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(9)').addEventListener('click', playerFunction)
document.querySelector('.game__array:nth-child(10)').addEventListener('click', playerFunction)
