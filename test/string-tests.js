const expect = require('chai').expect;
const capitalize = require('../js/strings-funcs').capitalize;
const OsToZeros = require('../js/strings-funcs').OsToZeros;

describe('strings tests', () => {
  it('capitalize() should capitalize all letters in a string', () => {
    var result1 = capitalize('hello');
    var result2 = capitalize('world');
    expect(result1).equal('HELLO');
    expect(result2).equal('WORLD');
  });
  

  it('OsToZeros() should replace all os with zeros', () => {
    var result1 = OsToZeros('hello');
    var result2 = OsToZeros('wOrld');
    expect(result1).equal('hell0');
    expect(result2).equal('w0rld');
  });

});
