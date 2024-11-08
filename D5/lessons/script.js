let = "John";
name = "Paul";
const temp = 100;


// Output variables
console.log(name);
console.log(temp);

// Basic Syntax
let x = 5;
let y = 10;
let sum = x + y;
console.log(sum);

// Primitive types: These are the most basic data types in JavaScript:
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let car = null; // null


// Number: Represents numeric values. For example, 5, 3.14, -10.
// String: Represents textual data enclosed in single ('') or double ("") quotes. For example, "Hello", 'JavaScript'.
// Boolean: Represents either true or false (logical values).
// Null: Represents the intentional absence of any object value.
// Undefined: Represents an uninitialized or missing value.



console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of car:", typeof car);
console.log("Type of city:", typeof city);
// Operators 

let difference = x - y;
console.log("Difference:", difference);

let product = x * y;
console.log("Product:", product);

let quotient = x / y;
console.log("Quotient:", quotient);

let remainder = x % y;
console.log("Remainder:", remainder);

// assignment operator
x = y;
console.log("x:", x);

y = x;
console.log("y:", y);

x += 5;
console.log("x + 5:", x);

x -= 5;
console.log("x - 5:", x);

x *= 5;
console.log("x * 5:", x);

x /= 5;
console.log("x / 5:", x);

x %= 5;

// comparison operators
if (x > y) {
    console.log("x is greater than y");
} else if (x < y) {
    console.log("x is less than y");
} else {
    console.log("x is equal to y");
}

if (x === y) {
    console.log("x is equal to y");
} else if (x !== y) {
    console.log("x is not equal to y");
}

if (x == y) {
    console.log("x is equal to y");
} else if (x != y) {
    console.log("x is not equal to y");
}

// logical operators
let sunny = true;
let warm = false;

console.log("True && False:", sunny && warm);
console.log("True || True:", sunny || sunny);
console.log("True || False:", sunny || warm);
console.log("!True:", !sunny);
console.log("!False:", !warm);


// conditional operator