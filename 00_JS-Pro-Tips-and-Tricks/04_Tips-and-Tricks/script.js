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
