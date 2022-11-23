let cards = [];
let cardsEl = document.querySelector("#cardsEl");
let sum = 0;
let sumEl = document.querySelector("#sumEl");
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#messageEl");
const startGameButton = document.querySelector("#startGame");
const newCardButton = document.querySelector("#newCard");
let playerEl = document.querySelector("#playerEl");

const player = {
  name: "John Doe",
  chips: 0,
}

const displayPlayerChips = () => {
  playerEl.textContent = `${player.name}: $${player.chips}`;
}

const renderGame = () => {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum === 21) {
    hasBlackJack = true;
    isAlive = true;
    message = "Wohoo! You've got Blackjack!";
    player.chips += 10;
    displayPlayerChips();
    newCardButton.disabled = true;
  } else if (sum > 21) {
    hasBlackJack = false;
    isAlive = false;
    message = "You're out of the game!";
    newCardButton.disabled = true;
  } else {
    hasBlackJack = false;
    isAlive = true;
    message = "Do you want to draw a new card?";
  }

  messageEl.textContent = message;
  sumEl.textContent = `Sum: ${sum}`;
};

const getRandomCard = () => {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
};

startGameButton.onclick = () => {
  newCardButton.disabled = false;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
};

const drawNewCard = () => {
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
};

newCardButton.onclick = () => {
  drawNewCard();
};

displayPlayerChips();