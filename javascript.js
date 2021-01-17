

// Find cards and place it into an array
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

let cardsSelected = [];
let cardsSelectedId = [];


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
        setTimeout (matchingCheck, 500);
    }
}

function matchingCheck(){
    const cardsImg = document.querySelectorAll("img");
    const firstChoice = cardSelectedId[0];
    const secondChoice = cardSelectedId[1];

    if(cardSelected[0] === cardSelected[1]){
        cardsImg[firstChoice] = removeAttribute("src");
        cardsImg[firstChoice] = removeEventListener("click", flipCard);
        cardsImg[secondChoice] = removeAttribute("src");
        cardsImg[secondChoice] = removeEventListener("click", flipCard);

    }



}

gameBoard()
