function greeting() {
    console.log("Hello, World!");
}

greeting();
greeting();
greeting();
greeting();
greeting();
greeting();

// Generating Random Numbers between 1 and 4

function getRandomOption() {
    let randomOption = Math.floor(Math.random() * 3 + 1);
    return randomOption;
}

let myNumber = getRandomOption();
console.log(`I got a random number: ${myNumber}`);

