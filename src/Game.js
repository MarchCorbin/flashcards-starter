const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck')
const Round = require('./Round')

class Game {
  constructor() {
    this.deck = new Deck()
    this.currentRound = 0
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    new round(deck)
    this.printMessage()
    this.printQuestion()
    round.deck = randomDeck
  }

  populateDeck() {
    this.deck.populate()
  }
}




module.exports = Game;