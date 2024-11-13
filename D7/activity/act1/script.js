function calculateLoan() {
    // Retrieve input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    // Validate inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate < 0 || loanTerm <= 0) {
        document.getElementById('result').innerText = 'Please enter valid input values.';
        return;
    }

    // Convert annual interest rate to monthly and calculate total months
    const monthlyRate = (interestRate / 100) / 12;
    const totalPayments = loanTerm * 12;

    // Calculate monthly payment using loan formula
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

    // Display result
    document.getElementById('result').innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}
