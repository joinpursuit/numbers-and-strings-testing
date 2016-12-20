const add = (a, b) => a + b;
//filterEvens takes an array (that could include any data type) and returns an array of only the even numbers
const filterEvens = function (arr){
  var arrEven = []
  for(var i = 0; i < arr.length; i++){
    arr[i]= parseInt(arr[i]);
    if(arr[i] % 2 === 0){
      arrEven.push(arr[i])
    }

  }
      return arrEven
}

// secondSmallest returns the second smallest number in an array


const secondSmallest = function(arr){
  arr.sort(function(a,b){
    return a-b
  })
  return arr[1]
}

// uniqueNums takes an array of numbers and returns only the unique numbers


module.exports = {
  add: add,
  filterEvens: filterEvens,
  secondSmallest: secondSmallest,
};
