let fare = 2.75
let train = []

class MetroCard { // define a class like a function, represents an object
  constructor(amt) {
    this.amt = amt
  }
}

function getCard() {
  let amount = prompt("How much would you like to add?")
  parseInt(amount)

}

newCard = getCard()

swipe = () => {
  if (card < fare) {
    return 'INSUFFICIENT FARE'
  } else if (card >= fare) {
    card -= fare
    train.push(person)
    return 'GO'
  }
}

// create card variable
// swupe the card
// check to see if the card has enoughf fare
// if yes, get on the train
// if no, refill card
