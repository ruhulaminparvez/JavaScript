/**************************************
* Replace all occurrences of a string *
**************************************/

// Replace all occurrences of a string
const quote = "React is JS framework & this framework is the most popular front-end framework right now"

// Replace all occurrences of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library"))  // "React is JS library & this library is the most popular front-end library right now"