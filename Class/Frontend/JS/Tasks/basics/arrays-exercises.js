console.log("Arrays Exercises Task\n");

// 1. Remove Falsy Values
console.log("1. Remove Falsy Values");
let originalArr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
let result = [];

function removeFalsy(orgArray, truthyArr) {
	for (let i = 0; i < orgArray.length; i++) {
		// Check if item is truthy, and add it to truthyArr
		if (orgArray[i]) {
			truthyArr.push(orgArray[i]);
		}
	}
	// Iterate over the new truthy array, and output all items
	// inside.
	console.log("\nTruthy array items list");
	for (let i = 0; i < truthyArr.length; i++) {
		console.log(truthyArr[i]);
	}
}
// Call function removeFalsy()
removeFalsy(originalArr, result);

/***************************************************************/
console.log("\n");

// 2. Join Array Elements
console.log("\n2. Join Array Elements");
let myColor = ["Red", "Green", "White", "Black"];

let myColorStr1 = myColor.join(", ");
console.log(myColorStr1);

let myColorStr2 = myColor.join(" + ");
console.log(myColorStr2);

/***************************************************************/
console.log("\n");

// 3. Insert Dashes Between Evens
console.log("3. Insert Dashes Between Evens");

let inputNumber = 15240;
let exercise3Result = "";

function insertDashesBetweenEvens(number) {
	// Convert input to string
	number = String(number);

	for (let i = 0; i < number.length; i++) {
		// check if the iterable is an even number
		if (number[i] % 2 == 0 || number[i] == 0) {
			// Don't add an "+" to the iterable in case it was the last and an even.
			if (i == number.length - 1) {
				exercise3Result += number[i];
				break;
			}
			exercise3Result += number[i] + "+";
		}
		// In case it's an odd, just add it to the result string.
		else {
			exercise3Result += number[i];
		}
	}

	console.log(exercise3Result);
}
insertDashesBetweenEvens(inputNumber);

/***************************************************************/
console.log("\n");

// 4. Add Items to Array
console.log("\n4. Add Items to Array");

let groceryList = [];
let itemName;
let itemsTotal = 0; // a counter to be compared with car size later.
let userInput = prompt("Enter number of items: "); // cart size
let cartSize = Number(userInput);

do {
	itemName = prompt("Item Name: ");
	itemsTotal++;
	console.log(`Item: '${itemName}' was added to your cart.`);
	groceryList.push(itemName);
} while (itemsTotal < cartSize);

console.log("\nYour Grocery List:");
groceryList.forEach((item) => {
	console.log(item);
});

/***************************************************************/
console.log("\n");

// 5. Find Element in Array
console.log("\n5. Find Element in Array");

let numbers = [72, 54, 33, 81, 21, 9, 49, 90];
let guessResult = " ";
let userGuess = prompt("Pick a number: ");
let userInputNumber = Number(userGuess);

function GuessTheRightNumber(arrName, userInput) {
	if (arrName.includes(userInput)) {
		return `Number ${userInput} found!`;
	} else {
		return `Number ${userInput} was not found!`;
	}
}
console.log(GuessTheRightNumber(numbers, userInputNumber));
