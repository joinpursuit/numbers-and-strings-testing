const add = (a, b) => a + b;

const filterEvens = (arr) => (arr.filter((val)=>(
  val % 2 === 0 && typeof val === 'number'
)))

const secondSmallest = (arr) => {
  let sorted = arr.sort((a,b)=> a-b )
  console.log(sorted)
  for(var i = 0; i < sorted.length; i++){
    if(sorted[i] !== sorted[i+1]){
      return sorted[i+1]
    }
  }
}

const uniqueNum = (arr) => {
  var obj = {}
  var uniqueArr = []
  for(var i = 0; i < arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  console.log(Object.keys(obj))
  for(var key in obj){
    if(obj[key] < 2){
      uniqueArr.push(parseInt(key))
    }
  }
  return uniqueArr
}

module.exports = {
  add: add,
  filterEvens: filterEvens,
  secondSmallest: secondSmallest,
  uniqueNum: uniqueNum
};
