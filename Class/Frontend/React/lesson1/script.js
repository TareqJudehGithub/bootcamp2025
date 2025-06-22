console.log("JS is LIVE!");
console.log("\n");
// Variables - Primitive values
const firstName = "John Smith";
let age = 20;
let isActive = true;
let notDefined;
let nothing = null;

// Variables - non-primitive
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array
let person = {
	name: "John",
	age: 30,
	isActive: false,
};

// Operators

let a = 10;
let b = 5;

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("\n");
const lastName = "Smith";
// concatenation
console.log("My name is: " + firstName + " " + lastName);
// template literals
console.log(`My name is: ${firstName} ${lastName}`);
console.log("\n");
const ageAllowed = 5;
// conditionals
if (age <= 5) {
	console.log("Under 18, You're not allowed!");
} else {
	console.log("Welcome! you're above 18 years old!");
}
console.log("\n");
// loops
// for loop
for (let i = 0; 0 < numbers.length; i++) {
	console.log(i);
}
console.log("\n");

// foreach
numbers.forEach((num) => {
	if (num % 2 == 0) {
		console.log(`Number ${num} is an odd number5`);
	}
});
