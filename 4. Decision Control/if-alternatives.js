// Normal If-else:

// let number = 10;
// if (number % 2 === 0) {
//     result = 'Number is even';
// } else {
//     result = 'Number is odd';
// }
// console.log(`The result is: ${result}`);

// Ternary Operator:

let number = 10;
let result = number % 2 === 0 ? 'Number is even' : 'Number is odd';
console.log(`The result is: ${result}`);

// Guard Operator:

let username;
let fallBackValue = 'Guest';
let greeting = `Welcome ${username || fallBackValue}`;
console.log(greeting);

//  Default Operator:

let username1 = ""; // Considers only Null and Undefined Values as Falsy Values.
let fallBackValue1 = 'Guest';
let greeting1 = `Welcome ${username1 ?? fallBackValue1}`;
console.log(greeting1);
