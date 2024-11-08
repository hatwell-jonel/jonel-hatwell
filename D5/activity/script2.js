let start = prompt("Enter the starting number:");
let end = prompt("Enter the ending number:");

// Convert inputs to numbers
start = Number(start);
end = Number(end);

if (!isNaN(start) && !isNaN(end)) {
    for (let i = start; i <= end; i++) {
        console.log("Number: ",i);
    }
} else {
    console.log("Please enter valid numbers for the range.");
}