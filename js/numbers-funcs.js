const add = (a, b) => a + b;

const filterEvens = (arr) => arr.filter ( (val) => val % 2 === 0 && typeof val === "number" ? val : null)

const secondSmallest = (arr) => {
	let smallest = arr[0];
	let secondSmallest = arr[1];
	arr.forEach( (val) => {
		console.log(smallest)
		console.log(secondSmallest)
		if (typeof smallest !== "number") smallest = val
		if (typeof secondSmallest !== "number" && val !== smallest) secondSmallest = val
		if (val < smallest && typeof val === "number") {
			secondSmallest = smallest;
			smallest = val;
		}	
	})
	return secondSmallest;
}

module.exports = {
  add: add,
  filterEvens: filterEvens,
  secondSmallest: secondSmallest
};
