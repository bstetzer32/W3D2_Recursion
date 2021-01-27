/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
***********************************************************************/

function deepDup(array) {
  let newArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      newArray.push(deepDup(element))
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
console.log(arr === duped) // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
