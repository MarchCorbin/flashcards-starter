const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck')
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Game = require('../src/Game')

describe('Round', function () {

  it('should be an instance of round', function () {
    const deck = new Deck()
    const round = new Round(deck.activeCards);
    expect(round).to.be.an.instanceOf(Round)
  })
  it('should return the current card to the user', function() {
    const deck = new Deck()
    const round = new Round(deck.activeCards);
    expect(round.getCurrentCard()).to.deep.equal(round.currentCard)
  })
  it('should be able to evaluate a guess', function() {
    const card = new Card()
    const deck = new Deck()
    const round = new Round();
    const game = new Game()
    game.startNewRound()
  })
})