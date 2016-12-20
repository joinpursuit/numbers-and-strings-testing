const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;
const secondSmallest = require('../js/numbers-funcs').secondSmallest;

describe('numbers tests', () => {
  it('add() should add two numbers', () => {
    var result1 = add(1, 2);
    var result2 = add(5, 11);
    var result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  });
  //Add more tests here:
  it('it should return an arreay of only even numbers', () => {
    var resulteven = filterEvens([1,2,5,6,2,5]);
    var resulteven1 = filterEvens(['a', 'b', 2, 3, "6"]);
    expect(resulteven).to.eql([2,6,2]);
    expect(resulteven1).to.eql([2, 6]);
  })
  it('it should return the second smallest number in an array', () => {
    var resultSecondSmallest = secondSmallest([1,2,3,4,5,6]);
    var resultSecondSmallest1 = secondSmallest([6,5,3,2,1]);
    expect(resultSecondSmallest).to.eql(2);
    expect(resultSecondSmallest1).to.eql(2);
  })
  it('should show only unique numbers on the array', () => {
    var resultunique = uniqueNums([1,2,3,4,1]);
    var resultunique1 = uniqueNums([1,2,3,4]);
    expect(resultunique).to.eql([1,2,3,4]);
    expect(resultunique1).to.eql([1,2,3,4]);
  })
});
