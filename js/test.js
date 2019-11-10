const should = require('chai').should();
const sinon = require('sinon');
const _ = require('lodash');

const XXX = require('./XXX');

describe.only('Setup', () => {
  it('is OK', () => {
    XXX().should.equal(1);
  });
});

describe.skip(`XXX function`, () => {
  beforeEach(() => {
    let sinonFake = { process: () => 1};
    let sinonMock = sinon.mock(sinonFake);
    let SUT = () => 1;
    SUT(sinonFake);
  });

  it(`it should ..`, () => {
    contains_array(XXX(), [50,50,50,50,50]).should.be.true;
  });

  // ...
});

describe(`contains_array function`, () => {
  it('returns true with a contained array', () => {
    expect(contains_array([[1,2,3],[1,2],[1]], [1])).to.be.true;
  });

  // ...
});

const contains_array = (arrays, array) => {
  return arrays
    .filter(a =>
      _.isEqual(a, array)
    ).length > 0;
}
