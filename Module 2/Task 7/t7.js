function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollUntilMax() {
    const sides = parseInt(prompt("Enter number of sides on the dice:"));
    let output = "<ul>";
    let roll;

    do {
        roll = rollDice(sides);
        output += `<li>${roll}</li>`;
    } while (roll !== sides);

    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}
