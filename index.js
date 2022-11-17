let cardsEl = document.querySelector("#cards");
let sumEl = document.querySelector("#sumEl");
let hasBlackJack = false;
let message = "";
let messageEl = document.querySelector("#messageEl");
const startGameButton = document.querySelector("#startGame");
const newCardButton = document.querySelector("#newCard");

const getRandomCard = () => {
  return 5;
}

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

const renderGame = () => {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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
};

startGameButton.onclick = () => {
  renderGame();
};

const drawNewCard = () => {
  let newCard = getRandomCard();
  sum += newCard;
  cards.push(newCard);
  renderGame();
};

newCardButton.onclick = () => {
  drawNewCard();
};