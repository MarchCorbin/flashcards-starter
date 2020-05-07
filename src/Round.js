const turn = require('./Turn.js');
const card = require('./Card.js');

class Round {
  constructor(deck) {
    this.turns = 0
    this.deck = deck
    this.currentCard = this.deck[this.turns]
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    turn.evaluateGuess() ? turn.giveFeedback() :  turn.giveFeedback(), this.incorrectGuesses.push(this.currentCard.id);
    this.currentCard = this.deck[this.turns]
    this.turns++
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