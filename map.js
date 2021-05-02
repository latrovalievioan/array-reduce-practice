// Implement Array.map() using reduce.

const arr = [1, 2, 3, 4, 5];

/**
 *
 * @param {Array} arr
 * @param {Callback} fn
 */
const map = (arr, fn) => {
  return arr.reduce((acc, num, index) => {
    acc[index] = fn(num);
    return acc;
  }, []);
};

const mapped = map(arr, (num) => num * 2);

console.log(mapped);

// Using it also to get an example of higher order functions. :)

// map is a higher order function - reduce is higher order function also
