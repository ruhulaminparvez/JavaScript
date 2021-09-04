/*********
 * Array *
 *********/

// Initialize new array
var names = ['nafiza', 'chowdhury', 'omi', 'ruhul', 'amin', 'parvez'];
var places = new Array('Bahubal', 'Mirpur', 'Habigonj'); //Not Used

console.log(names);
console.log(places);

console.log(typeof(names));
console.log(typeof(places));

// array length
console.log(names.length);
console.log(places.length);


// Mutate Array Dtata
names[2] = 'omita';
console.log(names);

names[names.length] = 'sonjoy';
console.log(names);

names[9] = 'debnath';
console.log(names);
console.log(names.length);

console.log(names[7]);


// Different Data Types
var ruhul = ['ruhul', 'amin', 1999, 'developer', false];

// push method add an element at end of the array
ruhul.push('blue');
console.log(ruhul);

// unshift method add an element at beginning of the array
ruhul.unshift('Mr');
console.log(ruhul);

// pop method remove the last element of the array
ruhul.pop();
console.log(ruhul);

// indexof method the position of the element
console.log(ruhul.indexOf(1999));


// Ternary Operator
var isDeveloper = ruhul.indexOf('developer') === -1 ? 'Ruhul is not a developer' : 'Ruhul is a developer';
console.log(isDeveloper); 