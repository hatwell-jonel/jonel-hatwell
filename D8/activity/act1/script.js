
// Calculate the square root of a given number.

function squareRoot(number) {
    return Math.sqrt(number);
}
console.log("square root is: " + squareRoot(9));

// Generate a random number between 1 and 10.
function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(`Random number between 1 and 10: ${randomNumber()}`);

// Convert a string representation of a number to an actual number.
let stringNumber = "42";
let actualNumber = parseInt(stringNumber);
// let actualNumber = Number(stringNumber); 
console.log(`Converted string "${stringNumber}" to number: ${actualNumber}`);


// Check if a value is not a number.
let value = "Hello";
let isNotANumber = isNaN(value);
console.log(`Is "${value}" not a number? ${isNotANumber}`);


// Convert a number to a string
let num = 123;
let numToString = num.toString();
console.log(`Converted number ${num} to string: "${numToString}"`);