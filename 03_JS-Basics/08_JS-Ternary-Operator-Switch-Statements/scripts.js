/***********************************************
 * The Ternary Operators and Switch Statements *
 ***********************************************/

var firstName = 'ruhul';
var age = 23;

// Ternary Operators
age >= 18 ? console.log(firstName+' drinks beer') : console.log(firstName+' drink juice');

// another method
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// if (age >= 18){
//     var drink = 'beer';
// }else{
//     var drink = 'juice';
// }
// console.log(drink);


// Switch statement
var job = 'cop';
switch (job){
    case 'teacher':
    case 'cop':
        console.log(firstName+ ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName+ ' drivers an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName+ ' designs beautiful websites');
        break;
    default:
        console.log(firstName+ ' does something else');
}