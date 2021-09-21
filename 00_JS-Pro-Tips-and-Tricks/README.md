# JavaScripts Tips and Tricks - JavaScript Job Interview Questions

## 01 - Remove falsy values from any array
```
// Remove Falsy values from array
let findFalsy = ['🍎', null, '🥑', undefined, false, '🍌', NaN, 0, '🍒', ''];

// passing Boolean to array.filer() will remove the falsy values from the array
let fruits = findFalsy.filter(Boolean);
console.log(fruits); // ['🍎', '🥑', '🍌', '🍒'];
```

➡️ Source Code : [Click Here](01_Tips-and-Tricks/script.js)