function greetUser() {
    const name = prompt("Please enter your name:");

    if (name) {
        document.getElementById("output1").innerHTML = `Hello, ${name}!`;
    } else {
        document.getElementById("output1").innerHTML = "No name entered.";
    }
}
