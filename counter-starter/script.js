function add(step) {
    let numberElement = document.getElementById("number");
    let number = numberElement.innerText;
    // console.log(number);
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