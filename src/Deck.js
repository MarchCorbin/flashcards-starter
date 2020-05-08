const Card = require('./Card.js')
const cardInfo = require('./data')
const Round = require('./Round')

class Deck {
  constructor() {
    this.activeCards = []
    this.allCards = []
  }
  createRandomDeck(deckSize) {
    const randomDeck = []
    for (var i = 0; i < deckSize; i++) {
      const rand = Math.floor(Math.random() * this.allCards.length)
      randomDeck.push(this.allCards[rand])
    }
    this.activeCards = randomDeck
  }
  
  countCards() {
    return this.activeCards.length
  }
  populate() {
    this.allCards = cardInfo.prototypeData.map(item => new Card(item.id, item.question, item.answers, item.correctAnswer))
  }
}



module.exports = Deck;
