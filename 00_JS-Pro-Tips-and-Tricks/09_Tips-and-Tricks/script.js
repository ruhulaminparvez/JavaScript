/*****************
* Swaping values *
*****************/

let array = [1,2,3,4,5,6,7,8,9,10];

// using temp variables
let temp = array[0];
array[0] = array[4];
array[4] = temp;

console.log(array); //[5, 2, 3, 4, 1, 6, 7, 8, 9, 10]

// uisng array distructuring
[array[1], array[3]] = [array[3], array[1]];
console.log(array); //[5, 4, 3, 2, 1, 6, 7, 8, 9, 10]


// another example
let a = 1;
let b = 2;

// swaping values
[a, b] = [b, a];
console.log(a, b); // a=2, b=1


// using math
b = a + (a = b) - b;
console.log(a, b); // a=1, b=2