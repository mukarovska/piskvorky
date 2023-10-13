import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'

let currentPlayer = 'circle'
const navigationIconeElement = document.querySelector('.navigation__icone')

const restartButtonElement = document.querySelector('.button--restart')
restartButtonElement.addEventListener('click', (event) => {
  if (window.confirm('Opravdu chceš restartovat hru?') === false) {
  event.preventDefault()
  }
})

const playerFunction = (event) => {
  
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle')
    currentPlayer = 'cross'
    navigationIconeElement.src = 'images/cross.svg'
    event.target.disabled = true
  } else {
    event.target.classList.add('board__field--cross')
    currentPlayer = 'circle'
    navigationIconeElement.src = 'images/circle.svg'
    event.target.disabled = true
  }

  evaluation()
}

const gameArrays = document.querySelectorAll('.game__array')
gameArrays.forEach((array) => {
  array.addEventListener('click', playerFunction)
})


const evaluation = () => {
  let gameField = []
  gameArrays.forEach((array) => {
    if (array.classList.contains('board__field--circle')) {
      gameField.push('o')
    } else if (array.classList.contains('board__field--cross')) {
      gameField.push('x')
    } else {
      gameField.push('_')
    }
  })
  console.log(gameField)
  const winner = findWinner(gameField)
  console.log('winner', winner)
  
  if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!')
      location.reload()
    }, 500)
  } else if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek!')
      location.reload()
    }, 500)
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila remízou!')
      location.reload()
    }, 500)
  }
}
