

let Cards = [];

let Player = {
    name : "Jass",
    chips : 200,
};

let sum = 0;
let hasBlackjack = false;
let isAlive = false;


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");

playerEl.textContent = `${Player.name} : ${Player.chips}`;

let message = "";



function getRandomCard() {
    let card = Math.floor(Math.random() * 13 + 1);
    if (card === 1) {
        return 11;
    } else if (card > 11 && card < 13) {
        return 10;
    } else {
        return card;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < Cards.length; i++) {
        cardsEl.textContent += ` ${Cards[i]}`;
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 21) {
        message = "Want to draw another card? ";
    } else if (sum === 21) {
        message = "Congrats! You won Blackjack! ";
        hasBlackjack = true;
    } else {
        message = "Sorry! You are out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    Cards = [firstCard , secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard() {
  if(isAlive === true && hasBlackjack === false){
    let thirdCard = getRandomCard();
    sum += thirdCard;
    Cards.push(thirdCard);
    renderGame();
  }
}
