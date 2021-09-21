/*********************************
* Remove Falsy values from array *
**********************************/ 

// initialize an array with truly and falsy values
let findFalsy = ['🍎', null, '🥑', undefined, false, '🍌', NaN, 0, '🍒', ''];

// passing Boolean to array.filer() will remove the falsy values from the array
let fruits = findFalsy.filter(Boolean);
console.log(fruits);