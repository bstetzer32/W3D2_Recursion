/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function permutations(array) {
  let newArray = [array.slice(0)]
  if (newArray.length === factorial(array.length)) {
    debugger
    return array;
  }

  for (let i = 0; i < array.length -; i++) {
    let el1 = array[i];
    let el2 = array[i + 1];
    let nEl1 = newArray[i];
    let nEl2 = newArray[i + 1];
    if (el1 === nEl1 && el2 === nEl2) {
      newArray[i] = nEl2;
      newArray[i + 1] = nEl1;
    }
  }

  return [array, permutations(newArray)]
}
console.log(permutations([1, 2, 3])) // [[1, 2], [2, 1]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
