const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {
  const card = new Card(
    1,
    "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"],
    "object"
  )
  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn)
  })


  it ('should return the user guess', function() {
    const turn = new Turn('elephant master')
    turn.returnGuess()
    expect(turn.guess).to.include('elephant master')
  })
  it('should return the card', function() {
    const turn = new Turn('anystring', card)
    const returnedCard = turn.returnCard()
    expect (returnedCard).to.deep.equal(card)
  })

  it ('should compare the guess with the correct answer', function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    )
    const turn  = new Turn('object', card)
    turn.evaluateGuess()
    expect(turn.guess).to.deep.include(card.correctAnswer)
  })
  it('should be able to give feedback accordingly!', function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    )
    const turn = new Turn('object', card)
    turn.evaluateGuess()
    expect(turn.giveFeedback()).to.equal('correct!')
  })
})