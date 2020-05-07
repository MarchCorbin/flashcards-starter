const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function () {

            it('should be a function', function () {
                const card = new Card();
                expect(Card).to.be.a('function');
            });
