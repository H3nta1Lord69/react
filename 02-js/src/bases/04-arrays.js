// Some kind of array
// const array = new Array(100);

const array = [1, 2, 3, 4];
array.push(1);

// Spread operator
let array2 = [...array, 5];
// array2.push(5);

const array3 = array2.map(function (num) {
  return num * 2;
});

console.log(array);
console.log(array2);
console.log(array3);
