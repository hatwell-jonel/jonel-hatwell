// Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (number) => number * number;
console.log(`The square of 145 is ${square(145)}`);


// Use template literals to create a welcome message that includes the name and age of a person.
const fname = "Jonel";
const age = 25;
console.log(`Welcome, ${fname}! You are ${age} years old.`);

// Use destructuring to extract the first and last name from a person object and log them to the console.
const person = { firstName: "John", lastName: "Doe" };
const { firstName, lastName } = person;
console.log(`First name: ${firstName}, Last name: ${lastName}`);

// Use the spread operator to merge two arrays into a single array.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log("Merged array:", mergedArray);


// Use default parameters to create a function that calculates the area of a rectangle.
const calculateArea = (length = 1, width = 1) => length * width;
console.log(`Area with default parameters: ${calculateArea()}`);
console.log(`Area with custom parameters: ${calculateArea(5, 10)}`);


// Task 6: Create a class called "Person" with properties for name and age, and a method to introduce the person. Instantiate an object of the class and call the introduce method.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const personInstance = new Person("Jonel", 25);
  personInstance.introduce();