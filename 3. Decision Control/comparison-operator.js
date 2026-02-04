console.log('Learning about comparison operators in JS');
console.log(5 === 5);
console.log(5 !== 5);

let age = 18;
console.log(age > 18); //Relational Operators
console.log(age < 18);

let age2 = 15;
console.log('Program Started');
if(age2 > 18) {
    console.log('You can drive');
}
else {
    console.log('You cannot drive');
}
console.log('Program Ended');

// Truthy VS Falsy Values

let a = 1;
if(a) {
    console.log('Truthy'); // Truthy 
}
else {
    console.log('Falsy');
}

let b = "";
if(b) {
    console.log('Truthy');
}
else {
    console.log('Falsy');
}
