const capitalize = (str) => str.split('').map((letter) => letter.toUpperCase()).join('');

function OsToZeros (str) {
  return str.replace(/o/gi,'0')
}

module.exports = {
  capitalize: capitalize,
  OsToZeros: OsToZeros
};
