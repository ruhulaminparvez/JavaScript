// Object Value Pair
const person = {
    firstName : 'Ruhul',
    lastName : 'Amin',
    age : 23,
    hobbies : ['Music', 'Movies', 'Sports'],
    address : {
        street : 'Bahubal',
        city : 'Hobigonj',
        state : 'Sylhet'
    }
}

console.log(`Object Value Pair: ${person.firstName}`);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// Add Value Pair
person.gmail = 'ruhul@gmail.com';
console.log(person);