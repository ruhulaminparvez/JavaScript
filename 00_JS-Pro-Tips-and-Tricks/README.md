# JavaScripts Tips and Tricks - JavaScript Job Interview Questions

## 01 - Remove falsy values from any array
```
/*********************************
* Remove Falsy values from array *
**********************************/

// initialize an array with truly and falsy values
let findFalsy = ['🍎', null, '🥑', undefined, false, '🍌', NaN, 0, '🍒', ''];

// passing Boolean to array.filer() will remove the falsy values from the array
let fruits = findFalsy.filter(Boolean);
console.log(fruits); // ['🍎', '🥑', '🍌', '🍒'];
```

➡️ Source Code : [Click Here](01_Tips-and-Tricks/script.js)

## 02 - Convert any value to Boolean
```
/*******************************
* Convert any value to Boolean *
*******************************/

// using !! we can convert and value to Boolean
console.log(!!'JavaScript') // true
console.log(!!1) // true
console.log(!!0) // false
console.log(!!undefined) // false

// using Boolean() we also can convert and value to Boolean
console.log(Boolean('JavaScript')) // true
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
```

➡️ Source Code : [Click Here](02_Tips-and-Tricks/script.js)

## 03 - Resizing any Array
```
/*********************
* Resizing any array *
**********************/

//initialize the array
let animals = ['🐱', '🐼', '🐯', '🦓']

// we can use array's length property
animals.length = 3

//output
console.log(animals) // ['🐱', '🐼', '🐯']
```

➡️ Source Code : [Click Here](03_Tips-and-Tricks/script.js)

## 04 - How to Flattern a Multi-dimensional Array
```
/********************************************
* How to Flattern a Multi-dimensional Array *
********************************************/

// initialize the array
let smileys = ['😊', ['😍', '😘'], '😏', ['😎', '🥺']]

// we can use flat() method to flattern one level array
console.log(smileys.flat()) // ['😊', '😍', '😘', '😏', '😎', '🥺']

// multi-level array
let smileysTwo = ['😊', '😍', ['😘', '😏', ['😎', '🥺']]]

// we can pass 'Infinity' parameter to array.flat function
console.log(smileysTwo.flat(Infinity)) // ['😊', '😍', '😘', '😏', '😎', '🥺']
```

➡️ Source Code : [Click Here](04_Tips-and-Tricks/script.js)

## 05 - Short Conditionals
```
/*********************
* Short Conditionals *
*********************/

// value declare
let captain = "Dhoni";

// Instead of doing this
if (captain === "Dhoni"){
    console.log("❤️")
}

// we can use &&
captain === "Dhoni" && console.log("❤️");

// And instead of doing this
if (captain !== "Dhoni"){
    console.log("👿")
}

// we can use ||
captain === "Dhoni" || console.log("👿");
```

➡️ Source Code : [Click Here](05_Tips-and-Tricks/script.js)

## 06 - Replace all occurrences of a string
```
/**************************************
* Replace all occurrences of a string *
**************************************/

// Replace all occurrences of a string
const quote = "React is JS framework & this framework is the most popular front-end framework right now"

// Replace all occurrences of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library"))  // "React is JS library & this library is the most popular front-end library right now"
```

➡️ Source Code : [Click Here](06_Tips-and-Tricks/script.js)

## 07 - Log values with variables names smartly
```
/******************************************
* Log values with variables names smartly *
******************************************/

// variables declare
const library1 = "jQuery"
const library2 = "React"

// Instead of doing this
console.log(`library1 - ${library1}`) // library1 - jQuery
console.log(`library2 - ${library2}`) // library2 - React

// we can do this
console.log({library1}) // {library1 : jQuery}
console.log({library2}) // {library2 : React}
```

➡️ Source Code : [Click Here](07_Tips-and-Tricks/script.js)

## 08 - Know performance of a task
```
/*****************************
* Know performance of a task *
*****************************/

const startTime = performance.now();

for (let i = 0; i < 50; i++){
    console.log(i)
}

const endTime = performance.now();

console.log(`loop took ${endTime - startTime} milliseconds to complete`)
```

➡️ Source Code : [Click Here](08_Tips-and-Tricks/script.js)


## 09 - Swaping Values
```
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
```

➡️ Source Code : [Click Here](09_Tips-and-Tricks/script.js)


## 10 - 
```

```

➡️ Source Code : [Click Here](10_Tips-and-Tricks/script.js)