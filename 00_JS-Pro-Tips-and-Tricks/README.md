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
