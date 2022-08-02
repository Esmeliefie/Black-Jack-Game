let player = {
    name: "Esmeralda",
    chips: 400
}
let sum = 0
let cards = []
let message = ""
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name  +  ": R"  +  player.chips

function getRandomCard() {

   let ranCards = Math.round(Math.random() * 13)

   if (ranCards > 10){
    return 10
   }
   else if (ranCards === 1){
    return 11
   }
   else {
    return ranCards
   }
   
    }   

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard  = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
    }

function renderGame() {
        
        cardEl.textContent = "Cards: "
        
        for( let i = 0; i < cards.length; i++) {
            cardEl.textContent += cards[i] + " "
        }

        if (sum <= 20) {
            message = "Do you want to draw a new card? "
        }
        else if (sum === 21) {
            message = "Wohoo! You've got Blackjack! "
            hasBlackJack = true
        }
        else {
            message = "You're out of the game! "
            isAlive = false
        } 

        messageEl.textContent = message
        sumEl.textContent = "Sum: " + sum 
        
    }
function newCard() {

        if (isAlive ===true && hasBlackJack === false) {
            let thirdCard = getRandomCard()
            sum += thirdCard
            cards.push(thirdCard)
            renderGame()
        }
    }