/************
 * Hoisting *
 ************/

/* Hoisting happens with function declaretion, 
not function expression */

// function declaretion
calculateAge(1999);

function calculateAge(year){
    console.log(2021 - year);
}

// function expression
//retirement(1999);

var retirement = function(year){
    console.log(65 - (2021 - year));
}


/*  Hoisting happens with variable */
console.log(age);
var age = 23;

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
