const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;


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
  it('filterEvens() should return only even numbers in an array', () => {
    var result1 = filterEvens(["hello", 4, 905, 300]);
    var result2 = filterEvens(["I have a yellow pony"]);
    var result3 = filterEvens([99, "300", -10]);
    expect(result1).to.eql([4,300]);
    expect(result2).to.eql([]);
    expect(result2).to.eql(["300", -10]);
  });

  it("secondSmallest() returns the second smallest number in an array", () => {
    var result1 = secondSmallest([0,1,3431,394]);
    var result2 = secondSmallest([-10, 5,2,11]);
    var result3 = secondSmallest(["hello", "9", 8, 99, 30]);
    expect(result1).to.eql(1);
    expect(result2).to.eql(2);
    expect(result1).to.eql("9");
  });

  it("uniqueNums() returns unique nums in array", () => {
    var result1 = uniqueNums([1,1,1,1]);
    var result2 = uniqueNums([9,8,8,7,6,9]);
    var result3 = uniqueNums([0,3,6,0,0,3,5,3]);
    expect(result1).to.eql([]);
    expect(result2).to.eql([7,6]);
    expect(result3).to.eql([6]);
  });
});
