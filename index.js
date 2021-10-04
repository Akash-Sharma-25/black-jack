//let firstCard = getRandomCard()
//let secondCard = getRandomCard()
let cardPick = []
let sum = 0
let blackjackHas = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
//console.log(messageEl)
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

function getRandomCard() {
    return Math.floor(Math.random()*13)+1    
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards :  "+ cardPick
    sumEl.textContent = "Sum : " +sum

    for(let i=0;i<cardPick.length;i++){
        cardPick.textContent  += cardPick[i]+ " "
    }

    if(sum <= 20){
        message = "do you want to draw a new card"
    }
    else if(sum === 21){
        message = "wohoo... you've got blackjack"
        blackjackHas = true
       
    }
    else{
        message = "you are out of the game"
        isAlive = false
        
    }
    
    messageEl.textContent = message
}


function card(){
    console.log("drawing a new card from deck")
    let cardnew = getRandomCard()
    sum += cardnew
    cardPick.push(cardnew)
    //console.log(cardPick)
    renderGame()
}





