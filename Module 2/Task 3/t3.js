function listDogs() {
    let dogs = [];

    for (let i = 0; i < 6; i++) {
        dogs.push(prompt(`Enter name of dog ${i + 1}:`));
    }

    dogs.sort().reverse();

    let output = "<ul>";
    for (let dog of dogs) {
        output += `<li>${dog}</li>`;
    }
    output += "</ul>";

    document.getElementById("output").innerHTML = output;
}
