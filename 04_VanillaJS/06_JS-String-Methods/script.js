/********************
* JS String Methods *
********************/

// declare string
let a = "my name is ruhul amin parvez";
let b = a.replace("ruhul amin parvez", "nafiza chowdhury"); // replace method
let c = a.length; // length of string

console.log(`Before replace method: ${a}`);
console.log(`After replace method: ${b}`);
console.log(`length of string: ${c}`);

// declare string
let d = "I'm a Student of Computer Science and Engineering";
let e = d.slice(6, 14); //slice

console.log(e);

let f = d.substring(17, 25); //substring
console.log(f);

let g = d.substr(6, 7);
console.log(g)

// regular expressions
let h = "Hello, I love coding. coding is my passion. when coding goes run perfectly it's makes me happy!"
let i = h.replace(/coding/i, "programming");
let j = h.replace(/coding/g, "code");

console.log(h);
console.log(i);
console.log(j);

// uppercase and lowercase
let k = h.toUpperCase();
let l = h.toLowerCase();

console.log(k);
console.log(l);

// concatenation
let m = "Hello" + " " + "World!";

console.log(m);

// another way
let n = "Hey,";
let o = "JavaScript";
let p = n.concat(" ", o);

console.log(p);

// trim
let q = "            JavaScript is ECMAScript!                ";
let s = q.trim();

console.log(`Before with whitespace: ${q}`);
console.log(`After remove space: ${s}`);

// charAt
let t = "Parvez";
let u = t.charAt(0);

console.log(`Output of variable t is: ${t}`);
console.log(`After applying charAt index 0: ${u}`);

// charCodeAt returns unicode according to the character
let v = t.charCodeAt(0);
console.log(`After applying charCodeAt index 0: ${v}`);

// property access
let w = t[0];
console.log(`After applying property access: ${w}`);

// split convert string into array
let x = "Hello World";
console.log(x.split(" "));
console.log(x.split(""));