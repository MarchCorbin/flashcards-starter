const Turn = require('./Turn.js');
const Card = require('./Card.js');
const Deck = require('./Deck.js')
const Game = require('./Game.js')

class Round {
  constructor(deck) {
    this.turns = 0
    this.deck = deck
    this.currentCard = {}
    this.incorrectGuesses = []
  }
  
  getCurrentCard() {
    this.currentCard = this.deck[this.turns]
  }

  takeTurn(guess) {
    const currentCard = this.getCurrentCard()
    let currentTurn = new Turn(guess, currentCard)
    if (currentTurn.evaluateGuess()) {
      currentTurn.giveFeedback()
      this.turns++
    } else {
      currentTurn.giveFeedback()
      this.incorrectGuesses.push(currentCard.id);
      this.turns++
    }
  }
  calculatePercentCorrect() {
    let correct = this.turns - this.incorrectGuesses.length
    let total = this.turns
    return (correct / total) * 100
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% correctly!`
  }


}


module.exports = Round;