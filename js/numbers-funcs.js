const add = (a, b) => a + b;
const filterEvens = (arr) => {
	return arr.filter(isEven)
}

const secondSmallest = (arr) => {
	arr = arr.filter((val) => { 
		return (typeof val) === 'number'
	})
	var min = arr[0]
	var secMin = Infinity

	for(var i = 0; i < arr.length; i++){
		min > arr[i] ? min = arr[i] : null
	}

	for(var i = 0; i < arr.length; i++ ){
		if(arr[i] > min && secMin > arr[i]){
			secMin = arr[i]
		}
	}

	return secMin != Infinity ? secMin : NaN;
}

const uniqueNums = (arr) => {
		arr = arr.filter((val) => { 
		return (typeof val) === 'number'
	})
	var newArr = []

	for(var i = 0; i < arr.length; i++){
		if(newArr.indexOf(arr[i]) === -1){
			newArr.push(arr[i])
		}
	}
	return newArr
}

module.exports = {
  add: add,
  filterEvens: filterEvens,
  secondSmallest: secondSmallest,
  uniqueNums : uniqueNums
};

function isEven(num){
	return num % 2 === 0
}