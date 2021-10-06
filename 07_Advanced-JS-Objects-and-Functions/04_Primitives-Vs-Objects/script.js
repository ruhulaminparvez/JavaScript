/**************************
 * Primitives Vs. Objects *
 **************************/

// Primitives are : number, string, boolean, undefined, null; Everything else are Objects


//Primitives
var a = 12;
var b = a;
a = 15;

console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'ruhul',
    age: 23
};

var obj2 = obj1;
obj1.name = 'amin';
obj1.age = 10;

console.log(obj1);
console.log(obj2);


//Function
var age = 15;
var obj = {
    name: 'ruhulamin',
    city: 'dhaka'
};

function change(a, b){
    a = 20;
    b.city = 'sylhet';  
}

change(age, obj);

console.log(age);
console.log(obj.city);
