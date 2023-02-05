// let username = "Jess Hek";
// console.log(`Hello, ${username}`);

// let num1 = 3;
// let num2 = 2;
// let total = num1 + num2;
// console.log(total);

// function example() {
//     console.log("Hello from your function");
// }

// example();

// function add(x, y) {
//     let result = x + y;
//     console.log(result);
// }

// add(5, 3);
// add(10, 3);
// add(100, 200);

function showName() {
    // console.log("Me!");
    let username = document.getElementById("name-text").value;
    console.log(`Hi, ${username}`);
}

// new code - - - - - - - always use 3 equals when comparing things in JS
let child = "Ruth";

if (child === "Wolfgang") {
    console.log("Wolfgang is a child");
} else if (child === "Koko") {
    console.log("Koko is the second best child");
} else {
    console.log("The child is not Wolfgang or Koko");
}
// new code - - - - - - - - - - - - - -

// for (let count = 0; count < 10; count ++) {
//     console.log(count);
// }

// let pets = ["dog", "cat", "bird", "fish"];
// console.log(pets);
// pets.push("hamster");
// console.log(pets);
// console.log(pets[0]);
// console.log(pets[3]);

// for (let index=0; index < pets.length; index++) {
//     console.log(pets[index]);
// }

// pets.forEach((pet) => {
//     console.log(pet);
// })