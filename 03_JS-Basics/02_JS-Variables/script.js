/*************************
 Variables and Data Types
 ************************/

/*
// string data type
var firstName = 'Ruhul';
console.log(firstName);

// string data type
var lastName = 'Amin';
console.log(lastName);

// number data type
var age = 28;
console.log(age);

// boolean data type
var bool = true;
console.log(bool);

// undefined
var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/


/****************************************
 * Variables mutation and type coercion *
 ****************************************/

var firstName = 'Ruhul';
var age = 21;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Student';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty one';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(lastName);