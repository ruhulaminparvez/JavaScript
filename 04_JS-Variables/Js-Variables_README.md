# Variables
### There are 3 ways to declare a JavaScript variable:
- Using var
- Using let
- Using const

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
