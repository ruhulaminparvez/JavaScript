/********************************************
 * Creating Object Function and Constructor *
 ********************************************/

var ruhul = {
    name: 'ruhul',
    yearOfBirth: 1999,
    job: 'developer'
};

// Function Constructor
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth =yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function(){
    console.log(2021 - this.yearOfBirth);
}

Person.prototype.lastName = 'chowdhury';

var amin = new Person('amin', 1999, 'developer');
console.log(amin);
var parvez = new Person('parvez', 1991, 'js learner');
var omi = new Person('omi', 2001, 'machine learning dev');

amin.calcAge();
parvez.calcAge();
omi.calcAge();

console.log(amin.lastName);
console.log(parvez.lastName);
console.log(omi.lastName);