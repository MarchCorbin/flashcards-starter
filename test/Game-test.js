const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function () {

  it('should be an instance of game', function () {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game)
  });
  it('should be able to populate the deck', function() {
    const game = new Game()
    game.populateDeck()
    console.log(game.deck)
  })

})
