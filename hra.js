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
}

const allArray = document.querySelectorAll('.game__array')
allArray.forEach((array) => {
  array.addEventListener('click', playerFunction)
})

console.log(allArray)




