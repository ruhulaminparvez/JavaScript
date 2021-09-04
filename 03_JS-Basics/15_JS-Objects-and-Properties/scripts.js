/**************************
 * Objects and Properties *
 **************************/

var ruhul = {
    firstName: 'ruhul',
    lastName: 'amin',
    age: 22,
    birthYear: 1999,
    family: ['jane,', 'mark', 'bob'],
    job: 'developer',
    isMarried: false
};

console.log(ruhul);
console.log(ruhul.firstName);
console.log(ruhul['lastName']);
console.log(ruhul.family);

var x = 'birthYear';
console.log(ruhul[x]);

// Mutate Object Data
ruhul.job = 'programmer';
ruhul['isMarried'] = true;
console.log(ruhul);

// Another way to declare object
var omi = new Object();
omi.name = 'nafiza';
omi.birthYear = 2000;
omi['isMarried'] = true;

console.log(omi);