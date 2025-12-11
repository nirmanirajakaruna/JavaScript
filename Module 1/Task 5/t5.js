function checkLeapYear() {
    const yearStr = prompt("Enter a year (e.g., 2024):");
    const year = parseInt(yearStr);

    if (isNaN(year)) {
        document.getElementById("output4").innerHTML =
            "Error: Please enter a valid number for the year.";
        return;
    }

    let notification;

    const isDivisibleBy4 = year % 4 === 0;
    const isDivisibleBy100 = year % 100 === 0;
    const isDivisibleBy400 = year % 400 === 0;

    if (isDivisibleBy400) {
        notification = `The year ${year} is a leap year (divisible by 400).`;
    } else if (isDivisibleBy100) {
        notification = `The year ${year} is not a leap year (divisible by 100 but not 400).`;
    } else if (isDivisibleBy4) {
        notification = `The year ${year} is a leap year (divisible by 4 but not 100).`;
    } else {
        notification = `The year ${year} is not a leap year.`;
    }

    document.getElementById("output4").innerHTML = notification;
}