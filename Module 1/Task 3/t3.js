function calculateOps() {
    const num1Str = prompt("Enter the first integer:");
    const num2Str = prompt("Enter the second integer:");
    const num3Str = prompt("Enter the third integer:");

    const num1 = parseInt(num1Str);
    const num2 = parseInt(num2Str);
    const num3 = parseInt(num3Str);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("output2").innerHTML =
            "Error: Please enter valid integers for all three inputs.";
        return;
    }

    const totalSum = num1 + num2 + num3;
    const product = num1 * num2 * num3;
    const average = totalSum / 3;

    document.getElementById("output2").innerHTML = `
        <strong>Results:</strong><br>
        Sum: ${totalSum}<br>
        Product: ${product}<br>
        Average: ${average.toFixed(2)}
    `;
}
