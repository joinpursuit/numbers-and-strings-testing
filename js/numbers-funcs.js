const add = (a, b) => a + b;

const filterEvens = (arr) => {
  var evens = [];
  arr.forEach((val,indx) => {
    if (val % 2 == 0){
      evens.push(val);
    }
  }) 
  return evens;
};

// const secondSmallest = (arr) => {
//   var smallest = arr[0];
//   var secondSmallest = arr[0];
//   arr.forEach((val, indx) => {
//     if(val < smallest){
//       secondSmallest = smallest;
//       smallest = val;
//     } else if(val > smallest && val < secondSmallest){
//       secondSmallest = val;
//     }
//   }) return secondSmallest;
// }

// const uniqueNums = (arr) => {
//   var hashtable = {};
//   var uniques = [];
//   arr.forEach((val, indx) => {
//     if(hashtable[val]){
//       hashtable[val] ++;
//     } else{
//       hashtable[val] = 1;
//     }
//   })

//   for(key in hashtable){
//     if(hashtable[key] === 1){
//       uniques.push(key);
//     }
//   }
//   return uniques;
// }


module.exports = {
  add: add,
  filterEvens: filterEvens,
  //secondSmallest: secondSmallest,
  //uniqueNums: uniqueNums
};
