function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollUntilSix() {
    let output = "<ul>";
    let roll;

    do {
        roll = rollDice();
        output += `<li>${roll}</li>`;
    } while (roll !== 6);

    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}
