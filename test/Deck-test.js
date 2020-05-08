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
    expect(deck.activeCards.length).to.equal(decklength)
    expect(deck.activeCards[0]).to.be.an.instanceOf(Card)
  })
})

it('should return the number of cards that are active', function() {
  const deck = new Deck()
  expect(deck.activeCards.length).to.equal(0)
  deck.populate()
  deck.createRandomDeck(5)
  expect(deck.countCards()).to.equal(5)
  
})

