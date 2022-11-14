let firstCard = 10;
let secondCard = 4;
let cardsEl = document.querySelector("#cards");
let sum = firstCard + secondCard;
let sumEl = document.querySelector("#sumEl");
let hasBlackJack = false;
let message = "";
let messageEl = document.querySelector("#messageEl");
const startGameButton = document.querySelector("#startGame");
const newCardButton = document.querySelector("#newCard");

const renderGame = () => {
  if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo! You've got Blackjack!";
  } else if (sum > 21) {
    message = "You're out of the game!";
  } else {
    message = "Do you want to draw a new card?";
  }

  messageEl.textContent = message;
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${firstCard} - ${secondCard}`;
};

startGameButton.onclick = () => {
  renderGame();
};

const drawNewCard = () => {
  let newCard = 11;
  sum = sum + newCard;
  renderGame();
};

newCardButton.onclick = () => {
  drawNewCard();
};
