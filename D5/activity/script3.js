let secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

let guessedNumber;

// Welcome message
console.log("Welcome to the Number Guessing Game!");
console.log("Try to guess the secret number between 1 and 10.");

do {
    guessedNumber = Number(prompt("Enter your guess:"));
    
    attempts++;

    if (guessedNumber < secretNumber) {
        console.log("Too low! Try again.");
    } else if (guessedNumber > secretNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log(`Congratulations! You guessed the correct number: ${secretNumber}`);
        console.log(`It took you ${attempts} attempts.`);
    }
} while (guessedNumber !== secretNumber);