/**************************************************
 * Truthy and Falsy Values and Equality Operators *
 **************************************************/

// falsy values : undefined, null, 0, ' ', NaN
// truthy values : NOT falsy values

var height;
if (height){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

height = 0;
if (height){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

height = '';
if (height){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality Operators
height = 23;
if (height === '23'){
    console.log('The == operator does type coercion');
}else {
    console.log('The === operator does not type coercion');
}