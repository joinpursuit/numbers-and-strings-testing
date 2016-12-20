const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;
const secondSmallest = require('../js/numbers-funcs').secondSmallest;
const uniqueNums = require('../js/numbers-funcs').uniqueNums;

describe('numbers tests', () => {
  it('add() should add two numbers', () => {
    var result1 = add(1, 2);
    var result2 = add(5, 11);
    var result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  })

  it('filterEvens() should filter out even numbers', () => {
  	var result1 = filterEvens([7, 5]);
  	var result2 = filterEvens([-4, 10]);
  	var result3 = filterEvens([-3, 6]);
  	var result4 = filterEvens(['hello', 3, 8])
    expect(result1).eql([]);
  	expect(result2).eql([-4, 10]);
  	expect(result3).eql([6]);
  	expect(result4).eql([8]);
  })

    it('secondSmallest() should return smallest number in array', () => {
  	var result1 = secondSmallest([7, 5, 3]);
  	var result2 = secondSmallest([-4, 10, -2, 1]);
  	var result3 = secondSmallest([1, 3])
  	var result4 = secondSmallest(['hello', 3, 8]);
  	var result5 = secondSmallest(['hello','hotdog']);
    expect(result1).equal(5);
  	expect(result2).equal(-2);
  	expect(result3).equal(3);
  	expect(result4).equal(8);
  	expect(result5).eql(NaN)
  })

    it('uniqueNums() should return an array of unique numbers', () => {
  	var result1 = uniqueNums([7, 5, 3]);
  	var result2 = uniqueNums([-4, 10, -2, 1, 1]);
  	var result4 = uniqueNums(['hello', 3, 8]);
  	var result5 = uniqueNums(['hello','hotdog', 2, 2]);
    expect(result1).eql([7, 5, 3]);
  	expect(result2).eql([-4, 10, -2, 1]);
  	expect(result4).eql([3, 8]);
  	expect(result5).eql([2])
  })
});
