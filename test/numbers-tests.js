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
  it('filterEvens() should filter an array of anything for even numbers', () => {
  	let test1 = filterEvens([1, 2, 3, 4]);
  	let test2 = filterEvens(["a", 22, "b", 8, "c"]);
  	let test3 = filterEvens(["nico", false, 52, {"b": 80}, [22], 6]);
  	let test4 = filterEvens([true, 100, {2: 20}, [50, 22], 6.20]);
  	expect(test1).to.eql([2, 4]);
  	expect(test2).to.eql([22, 8]);
  	expect(test3).to.eql([52, 6]);
  	expect(test4).to.eql([100]);
  })
  ///////secondSmallest returns the second smallest number in an array
  it('secondSmallest() should return the second smallest number in an array', () => {
  	let test1 = secondSmallest([1, 2, 3, 4]);
  	let test2 = secondSmallest(["ayy", 2, "memes", 4]);
  	let test3 = secondSmallest([1, {wrong: 2}, [3], 500, 25]);
  	expect(test1).to.eql(2);
  	expect(test2).to.eql(4);
  	expect(test3).to.eql(25);
  })
});
