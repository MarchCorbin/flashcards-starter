const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck')
const Round = require('./Round.js')
const Turn = require('./Turn')

class Game {
  constructor(deck) {
    this.deck = deck
    this.currentRound = null
  }

  printMessage(deck, currentRound) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  populateDeck() {
    this.deck = this.deck.populate()
  }

  startNewRound() {
    let currentDeck = new Deck()
    currentDeck.populate()
    let downToFive = currentDeck.createRandomDeck(5)
    this.currentRound = new Round(downToFive);
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion()
  }
}




module.exports = Game;