let balance = 100
let fare = 2.75
Atrain = []


class MetroCard { // define a class like a function, represents an object
    constructor(amt) {
      this.amt = amt
  }
}

getCard = () => {
  let amount = prompt("How much would you like to add?")
  balance -= (amount - 1)
  let card = new MetroCard(parseInt(amount))
    return card
}

newCard = getCard()

swipe = (card) => {
  console.log(fare)
  console.log(card.amt)
  if (card.amt < fare) {
    return 'INSUFFICIENT FARE'
} else if (card.amt >= fare) {
  card.amt -= fare
  Atrain.push(card)
  console.log(card.amt)
    return 'GO'
  }
}





// get a metrocard
 --> load money

 // every ride = 2.75

 // swipe your metrocard

 // go through turnstile
