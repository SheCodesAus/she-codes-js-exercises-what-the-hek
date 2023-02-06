function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + step;
    numberElement.innerText = number;
}
// Some html elements use .value and some use .innerText depending on whether it's a paragraph, might need to google this

function take(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) - step;
    numberElement.innerText = number;
}

// adds or subtracts a random number to the total
function random(min, max) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    number = parseInt(number) + (Math.floor(Math.random() * (max - min) + min));
    numberElement.innerText = number;
}

// resets the counter to 0
function Reset() {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
}
