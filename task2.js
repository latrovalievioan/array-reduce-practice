// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, '');
}

console.log(stringConcat([1, 2, 3])); // "123"
