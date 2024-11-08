function getGrade(score) {
    let grade;

    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    alert(`The grade is: ${grade}`);
    console.log(`The grade is: ${grade}`);
}

let userScore = prompt("Enter the score:");
userScore = Number(userScore);

if (!isNaN(userScore)) {
    getGrade(userScore);
} else {
    console.log("Please enter a valid number for the score.");
}