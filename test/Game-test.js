const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Game');

describe('Game', function () {

            it('should be a function', function () {
                const game = new Game();
                expect(Game).to.be.a('function');
            });
