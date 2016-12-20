const add = (a, b) => a + b;

function filterEvens (arr) {
  var output = []
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      output.push(arr[i])
    }
  }
  return output
}

function secondSmallest (arr) {
  return arr.sort(function(a,b){return(a-b)})[1]
}

module.exports = {
  add: add,
  filterEvens: filterEvens,
  secondSmallest: secondSmallest
};
