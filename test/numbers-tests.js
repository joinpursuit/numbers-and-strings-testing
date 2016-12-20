const expect = require('chai').expect;
const add = require('../js/numbers-funcs').add;
const filterEvens = require('../js/numbers-funcs').filterEvens;
const secondSmallest = require('../js/numbers-funcs').secondSmallest;
const uniqueNum = require('../js/numbers-funcs').uniqueNum;

describe('numbers tests', () => {
  //ADD:
  it('add() should add two numbers', () => {
    var result1 = add(1, 2);
    var result2 = add(5, 11);
    var result3 = add(-10, 33);
    expect(result1).equal(3);
    expect(result2).equal(16);
    expect(result3).equal(23);
  });
  //FILTER EVENS:
  it('filterEvens() shoud filter only even numbers', ()=>{
    var result1 = filterEvens([1, 2, 3, 4, 5]);
    var result2 = filterEvens(['2', 2, '3', 10, '5']);
    var result3 = filterEvens([add(), {}, 4, 6, 8, 'hello']);
    expect(result1).be.a('array').have.members([2,4]);
    expect(result2).be.a('array').have.members([2,10]);
    expect(result3).be.a('array').have.members([4, 6, 8]);
  });
  //SECOND SMALLEST:
  it('secondSmallest() should return the second smallest number in array', ()=>{
    var result1 = secondSmallest([10, 20, 30, 40, 50])
    var result2 = secondSmallest([2, 2, 4, 3, 1])
    var result3 = secondSmallest([8, 9, 7, 6, 4, 1, 10])
    expect(result1).be.a('number').equal(20)
    expect(result2).be.a('number').equal(2)
    expect(result3).be.a('number').equal(4)
  })
  //UNIQUE NUM:
  it('uniqueNum() should takes in an array of numbers and return the unique numbers', ()=>{
    var result1 = uniqueNum([1, 2, 2, 2, 3, 4, 5, 5, 5])
    var result2 = uniqueNum([1, 1])
    var result3 = uniqueNum([0, 1, 2, 1, 4, 4])
    expect(result1).be.a('array').have.members([1, 3, 4])
    expect(result2).be.a('array').have.members([])
    expect(result3).be.a('array').have.members([0, 2])
  })
});
