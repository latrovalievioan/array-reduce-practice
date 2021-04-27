//1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce((acc, num) => {
        return acc + num
    })
 }
 
 console.log(total([1,2,3]));