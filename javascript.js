//Repeated two sets of cards to allow matching cards
const cardsArray = [{name: "Ace", img: "cardImages/Ace.png"}, {name: "2", img:"cardImages/2.png"}, 
{name: "3", img:"cardImages/3.png"}, {name: "4", img: "cardImages/4.png"}, 
{name: "5", img: "cardImages/5.png"}, {name: "6", img:"cardImages/6.png"}, 
{name: "7", img:"cardImages/7.png"}, {name:"8", img:"cardImages/8.png"},
{name: "9", img:"cardImages/9.png"}, {name:"10", img:"cardImages/10.png"}, 
{name:"Jack", img:"cardImages/Jack.png"},
{name: "Queen", img: "cardImages/Queen.png"}, {name: "King", img:"cardImages/King.png"}, 
//Second set of cards to match the first set
{name: "Ace", img: "cardImages/Ace.png"}, {name: "2", img:"cardImages/2.png"}, 
{name: "3", img:"cardImages/3.png"}, {name: "4", img: "cardImages/4.png"}, 
{name: "5", img: "cardImages/5.png"}, {name: "6", img:"cardImages/6.png"}, 
{name: "7", img:"cardImages/7.png"}, {name:"8", img:"cardImages/8.png"},
{name: "9", img:"cardImages/9.png"}, {name:"10", img:"cardImages/10.png"}, 
{name:"Jack", img:"cardImages/Jack.png"},
{name: "Queen", img: "cardImages/Queen.png"}, {name: "King", img:"cardImages/King.png"}]


const board = document.querySelector(".game-box");

const displayPlayersTurn = document.querySelector("#current-player");
const playersTurnMessage = document.querySelector("#players-turn");

const displayPlayerOneScore = document.querySelector("#player1-score");
const displayPlayerTwoScore = document.querySelector("#player2-score");

/* Use to display the winner when game finishes */
const winner = document.querySelector("#player-winner");
const winnerContainer = document.querySelector(".winner");

/* When game ends - a reset buttons to restart game */
const restartBtn = document.querySelector("#restartBtn");

let playersTurn = 1;
let playerOneScore = 0;
let playerTwoScore = 0;

let cardsSelected = [];
let cardsSelectedId = [];

let cardCounter = cardsArray.length;

/* Used to make the modal box appear and disappear */
let modal = document.querySelector("#myModal");
let btn = document.querySelector("#myLink");
let span = document.querySelector(".close");

/* This function randomizes the card array*/
cardsArray.sort(function(){
    return 0.5 - Math.random();
});

//Layout the cards
function gameBoard(){
    for (let i = 0; i < cardsArray.length; i++) {
        const cards = document.createElement("img");
        cards.setAttribute("src", "cardImages/cardBack.png");
        cards.setAttribute("data-card_id", i);
        cards.addEventListener("click", flipCard);
        board.appendChild(cards);
        
    }
}

function flipCard(){
    let card_id = this.getAttribute("data-card_id");
    cardsSelected.push(cardsArray[card_id].name);
    this.setAttribute("src", cardsArray[card_id].img);
    cardsSelectedId.push(card_id);
    if(cardsSelected.length === 2){
        setTimeout (matchingCheck, 200);
    }
}

function matchingCheck(){
    const cardsImg = document.querySelectorAll("img");
    const firstChoice = cardsSelectedId[0];
    const secondChoice = cardsSelectedId[1];
    if (firstChoice == secondChoice){
        
        cardsImg[firstChoice].setAttribute("src", "cardImages/cardBack.png");
            if (playersTurn == 1){
                playersTurn = 2;
                displayPlayersTurn.innerHTML = playersTurn;
    }       else if (playersTurn ==2){
                playersTurn = 1;
                displayPlayersTurn.innerHTML = playersTurn;
    }
        alert("You selected the same card, you have lost your turn");
    }
    else if(cardsSelected[0] === cardsSelected[1]){
        cardsImg[firstChoice].removeAttribute("src");
        cardsImg[firstChoice].removeEventListener("click", flipCard);
        cardsImg[secondChoice].removeAttribute("src");
        cardsImg[secondChoice].removeEventListener("click", flipCard);
        alert("Cards match, please choose again");
            if(playersTurn == 1){
                playerOneScore++;
                cardCounter -=2;
                displayPlayerOneScore.innerHTML = playerOneScore;
            }else if (playersTurn == 2){
                playerTwoScore++;
                cardCounter -=2;
                displayPlayerTwoScore.innerHTML = playerTwoScore;
            }
       
    }
    else {
        cardsImg[firstChoice].setAttribute("src", "cardImages/cardBack.png");
        cardsImg[secondChoice].setAttribute("src", "cardImages/cardBack.png");
        alert("Next Players turn");
            if (playersTurn == 1){
                playersTurn = 2;
                displayPlayersTurn.innerHTML = playersTurn;
            }else if (playersTurn ==2){
                playersTurn = 1;
                displayPlayersTurn.innerHTML = playersTurn;
            }
        
    }
    cardsSelected=[];
    cardsSelectedId=[];
    
    if (cardCounter === 0){
        
        winnerContainer.style.visibility = "visible";
        playersTurnMessage.style.visibility = "hidden";
        board.style.visibility = "hidden";

        if (playerOneScore > playerTwoScore){ 
            winner.innerHTML = "The winner is: Player 1";
        }else if(playerOneScore == playerTwoScore){
            winner.innerHTML = "No winner, both Players Tied";
        }else {
            winner.innerHTML = "The winner is: Player 2";
        }
    }
}

restartBtn.addEventListener("click", function(){
    gameBoard()
    playersTurn = 1;
    playerOneScore = 0;
    playerTwoScore = 0;

    winnerContainer.style.visibility = "hidden";
    playersTurnMessage.style.visibility = "visible";
    board.style.visibility = "visible";
    
    displayPlayerOneScore.innerHTML = playerOneScore;
    displayPlayerTwoScore.innerHTML = playerTwoScore;
});



btn.addEventListener("click", function(){
    modal.style.display = "block";
});

span.addEventListener("click", function(){
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



gameBoard()
