# Variables
### There are 3 ways to declare a JavaScript variable:
- Using [var](#var)
- Using [let](#let)
- Using [const](#const)

## Var
Variables can be declared with `var` keyword and `var` is a `Global Scope`

For Example:
```
var x = 5;
var y = 6;
var z = x + y;
```

## Let
The `let` keyword was introduced in `ES6 (2015)`.

Variables defined with `let` cannot be Redeclared.
For Example:
```
let x = "Ruhul";

let x = 0;

// SyntaxError: 'x' has already been declared
```

With var we can:
```
var x = "Ruhul";

var x = 0;
```

Variables defined with `let` must be Declared before use.


Before `ES6 (2015)`, JavaScript had only `Global Scope` and `Function Scope`.

Variables defined with `let` have `Block Scope`.

Variables declared inside a { } block cannot be accessed from outside the block:
For Example,

```
{
  let x = 2;
}
// x can NOT be used here
```

Variables declared with the `var` keyword can NOT have `block scope`.

Variables declared inside a { } block can be accessed from outside the block.For Example,

```
{
  var x = 2;
}
// x CAN be used here
```

Redeclaring a variable using the `var` keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block: For Example,

```
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```

Redeclaring a variable using the `let` keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block: For Example, 

```
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```

## Const

The `const` keyword was introduced in `ES6 (2015)`.

Variables defined with `const` cannot be Redeclared.

Variables defined with `const` have Block Scope.

Variables defined with `const` cannot be Reassigned. For Example,

```
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```

### Must be Assigned

JavaScript const variables must be assigned a value when they are declared:

### Correct
```
const PI = 3.14159265359;
```

### Incorrect
```
const PI;
PI = 3.14159265359;
```

### Use `const` when you declare:

- A new Array
- A new Object
- A new Function
- A new RegExp

### Constant Objects and Arrays

The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this we can NOT:

- Reassign a constant value
- Reassign a constant array
- Reassign a constant object

But we CAN:

Change the elements of constant array
Change the properties of constant object

### Constant Arrays
We can change the elements of a constant array, For Example
```
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

But you can NOT reassign the array:
```
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

### Constant Objects

You can change the properties of a constant object, For Example
```
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

But you can NOT reassign the object:
```
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

### Block Scope
Declaring a variable with `const` is similar to `let` when it comes to Block Scope. For Example,

```
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10
```

### Redeclaring

Redeclaring a JavaScript `var` variable is allowed anywhere in a program:
```
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
```

Redeclaring an existing `var` or `let` variable to const, in the same scope, is not allowed:

```
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
```

Reassigning an existing const variable, in the same scope, is not allowed:

```
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
```

Redeclaring a variable with const, in another scope, or in another block, is allowed:
```
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
```

### Const Hoisting

Variables defined with var are hoisted to the top and can be initialized at any time.

```
carName = "Volvo";
var carName;
```