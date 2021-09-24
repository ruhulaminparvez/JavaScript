/*************
* JS OBJECTS *
*************/
// object
let car = {
    name: "Fiat",
    model: 500,
    weight: "800kg",
    color: "white",
    start: function(){
        console.log("car has started");
    },
    drive: function(){
        console.log("car has driving");
    }
};


console.log(car);
console.log(car.weight);
console.log(car['model']);

// literal
const person = {firstName: "John", lastName: "Doe", age: 50, eye: "Blue"};

console.log(person);