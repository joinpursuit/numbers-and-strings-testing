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
  it('filterEvens() takes an array & returns only even numbers', () => {
    var result1 = filterEvens([1,2,3,4]);
    var result2 = filterEvens([10,20,21,30,40,50]);
    var result3 = filterEvens([10,9,8,7,6,5,4]);
    expect(result1).eql([2,4]);
    expect(result2).eql([10,20,30,40,50]);
    expect(result3).eql([10,8,6,4]);
  });
  it('secondSmallest() returns the second smallest number in an arr', () => {
    var result1 = secondSmallest([1,2,3,4,5]);
    var result2 = secondSmallest([9,10,12,13,14,4,45,-2,0,2]);
    var result3 = secondSmallest([10,9,100,90]);
    expect(result1).eql(2);
    expect(result2).eql(0);
    expect(result3).eql(10);
  })
});
