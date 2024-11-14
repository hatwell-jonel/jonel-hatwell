function square(x) {
    return x * x;
}

console.log(square(5));


const squareArrow = (x) =>  x * x;


console.log(squareArrow(5));

const multiply = (x, y) => x * y;

console.log(multiply(5, 5));


// TEMPLATE LITERAL
const name = "Alice";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);


/*
Destructuring - Extract Values from Arrays and Objects

Destructuring allows you to quickly unpack values from arrays or objects into separate variables, making it easier to work with complex data structures.
*/

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const person = { name: 'Bob', age2: 30, country: 'USA' };
const { name : personName, age2, country } = person;
console.log(personName); // Bob
console.log(age2); // 30    
console.log(country); // USA

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but serve different purposes based on where they are used.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Default Parameters - Set Default Values for Function Arguments

const caculateArea = (length = 1, width = 1) => length * width;

console.log(caculateArea()); // 1
console.log(caculateArea(3,4)); // 12