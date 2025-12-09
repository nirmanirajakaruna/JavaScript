function listParticipants() {
    const count = parseInt(prompt("Enter number of participants:"));
    let names = [];

    for (let i = 0; i < count; i++) {
        names.push(prompt(`Enter name of participant ${i + 1}:`));
    }

    names.sort();

    let output = "<ol>";
    for (let name of names) {
        output += `<li>${name}</li>`;
    }
    output += "</ol>";

    document.getElementById("output").innerHTML = output;
}
