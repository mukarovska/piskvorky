import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const navigationIconeElement = document.querySelector('.navigation__icone');

const restartButtonElement = document.querySelector('.button--restart');

//Alert na restart hry
restartButtonElement.addEventListener('click', (event) => {
  if (window.confirm('Opravdu chceš restartovat hru?') === false) {
    event.preventDefault();
  }
});

//Přidávání koleček a křížků na herní plochu
const playerFunction = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    navigationIconeElement.src = 'images/cross.svg';
    event.target.disabled = true;
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    navigationIconeElement.src = 'images/circle.svg';
    event.target.disabled = true;
  }
  //Spuštění funkce k načtení pole a vyhodnocení
  evaluation();
};

//Spuštění funkce k umysťování křížků a koleček
const gameArrays = document.querySelectorAll('.game__array');
gameArrays.forEach((array) => {
  array.addEventListener('click', playerFunction);
});

//Funkce k načtení pole a vyhodnocení
const evaluation = async () => {
  let gameField = [];
  gameArrays.forEach((array) => {
    if (array.classList.contains('board__field--circle')) {
      gameField.push('o');
    } else if (array.classList.contains('board__field--cross')) {
      gameField.push('x');
    } else {
      gameField.push('_');
    }
  });

  //Kontrola zda někdo vyhrál, hledání výtěze
  const winner = findWinner(gameField);

  //Alert v případě, že někdo vyhrál
  if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!');
      location.reload();
    }, 500);
  } else if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek!');
      location.reload();
    }, 500);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila remízou!');
      location.reload();
    }, 500);
  } else if (winner === null && currentPlayer === 'cross') {
    gameArrays.forEach((array) => {
      array.disabled = true;
    });
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          board: gameField,
          player: 'x',
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const field = gameArrays[x + y * 10];

    gameArrays.forEach((array) => {
      if (
        !array.classList.contains('board__field--circle') &&
        !array.classList.contains('board__field--cross')
      ) {
        array.disabled = false;
      }
    });

    field.click();
  }
};
