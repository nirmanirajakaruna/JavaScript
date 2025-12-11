function sortStudent() {
    const studentName = prompt("Enter the student's name:");

    if (!studentName) {
        document.getElementById("output3").innerHTML = "Sorting cancelled.";
        return;
    }

    const houseNumber = Math.floor(Math.random() * 4) + 1;
    let house;

    if (houseNumber === 1) {
        house = "Gryffindor";
    } else if (houseNumber === 2) {
        house = "Slytherin";
    } else if (houseNumber === 3) {
        house = "Hufflepuff";
    } else { // houseNumber === 4
        house = "Ravenclaw";
    }

    document.getElementById("output3").innerHTML = `${studentName}, you are ${house}.`;
}