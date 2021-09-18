//print something on console
console.log("Hello JavaScript");

//declare variable: 3 types of variables are there in javascript
//var keyword, which declares a variable globally, or locally to an entire function regardless of block scope
var myName = "ruhul";
console.log(myName);

//let keyword variable allows to declare variables that are limited to the scope of a block statement
let numberOne = 12;
console.log(numberOne);

//const keyword variable can't modify
const pi = 3.14;
console.log(pi);

//data types
/* String, Number, BigInt, Boolean, undefined, null, symbol, Object */

//string - single quotes/double quotes/backticks
var name = 'parvez';
var name1 = "amin";
var name2 = `ruhul`;
console.log(name);
console.log(name1);
console.log(name2);

//concatenation
console.log("The names are: "+name2+name1+name);

//numbers
// number represents integer and floating numbers (decimals and exponentials). For example,

//integer
var number1 = 3;
//float/decimal
var number2 = 3.45;
//exponentials
var number3 = 3e5 // 3 * 10^5

console.log(number1);
console.log(number2);
console.log(number3);

// A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,
var number4 = 3/0;
console.log(number4); // Infinity

var number5 = -3/0;
console.log(number5); // -Infinity

// strings can't be divided by numbers
var number6 = "abc"/3; 
console.log(number6);  // NaN

/*In JavaScript, Number type can only represent numbers less than (2^53 - 1) and more than -(2^53 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.*/
// A BigInt number is created by appending n to the end of an integer. For example,

// BigInt value
// const value1 = 900719925124740998n;

// // Adding two big integers
// const result1 = value1 + 1n;
// console.log(result1); // "900719925124740999n"

// const value2 = 900719925124740998n;

// // Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2); 

/* BigInt was introduced in the newer version of JavaScript and is not supported by many browsers including Safari.*/

//Boolean
var bool1 = true;
var bool2 = false;

console.log(bool1);
console.log(bool2);


//undefined
var nameUndefined;
console.log(nameUndefined);

//null
var valueNull = null;
console.log(valueNull);