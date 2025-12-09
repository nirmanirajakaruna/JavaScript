function stopOnDuplicate() {
    let numbers = [];
    let num;

    while (true) {
        num = parseFloat(prompt("Enter a number:"));
        if (numbers.includes(num)) {
            alert("This number has already been entered. Stopping...");
            break;
        }
        numbers.push(num);
    }

    numbers.sort((a, b) => a - b);

    console.log("Numbers in ascending order:");
    for (let n of numbers) {
        console.log(n);
    }
}
