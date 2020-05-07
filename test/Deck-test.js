const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card')

describe('Deck', function () {

  it('should be a function', function () {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck)
  });

  it('should populate with cards', function() {
    const deck = new Deck()
    expect(deck.allCards).to.be.empty
    deck.populate()
    expect(deck.allCards).to.not.be.empty
    expect(deck.allCards[0]).to.be.an.instanceOf(Card)
  })
  it('should be able to have different size decks', function() {
      const decklength = 5
    const deck = new Deck()
    deck.populate()
    deck.createRandomDeck(decklength)
    console.log(deck.activeCards)
    expect(deck.activeCards.length).to.equal(decklength)
    expect(deck.activeCards[0]).to.be.an.instanceOf(Card)
  })
})

