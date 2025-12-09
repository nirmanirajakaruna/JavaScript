function calculateSquareRoot() {
    const shouldCalculate = confirm("Should I calculate the square root?");

    const output = document.getElementById("output");

    if (!shouldCalculate) {
        output.innerHTML = "The square root is not calculated.";
        return;
    }

    const numberStr = prompt("Enter a number:");
    const number = parseFloat(numberStr);

    if (isNaN(number)) {
        output.innerHTML = "Error: Please enter a valid number.";
    } else if (number < 0) {
        output.innerHTML = "The square root of a negative number is not defined.";
    } else {
        const result = Math.sqrt(number);
        output.innerHTML = `The square root of ${number} is ${result.toFixed(4)}.`;
    }
}
