const Turn = require('./Turn.js');
const Card = require('./Card.js');
const Deck = require('./Deck.js');
const Game = require('./Game')


class Round {
  constructor(deck) {
    this.turns = 0
    this.deck = deck
    this.currentCard = {}
    this.incorrectGuesses = []
  }
  
  returnCurrentCard() {
    this.currentCard = this.deck.activeCards[this.turns]
    return this.currentCard
  }

  takeTurn(guess) {
    const currentCard = this.currentCard
    let currentTurn = new Turn(guess, currentCard)
    if (currentTurn.evaluateGuess()) {
      this.turns++
      return currentTurn.giveFeedback()
    } else {
      this.incorrectGuesses.push(currentCard.id);
      this.turns++
      return currentTurn.giveFeedback()
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
