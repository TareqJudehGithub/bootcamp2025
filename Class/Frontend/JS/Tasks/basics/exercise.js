console.log("Javascript Exercises");

// 1. Variables and Data Types - Type Evaluation
// What will be the output and why?

let a = "5";
let b = 2;

let result1 = a + b;
let result2 = a * b;
let result3 = a - b;
let result4 = a / 0;
let result5 = typeof (a + b);

console.log(result1);
/*
Result = 52
Javascript implicitly converts a number to a string when addition
operator is used. Therefor in our example here, we used string concatenation 
between a and b.
*/

console.log(result2);
/* 
Result = 10
In multiplication, Javascript performs 
implicit type converts a string to number
before performing the operation. 5 * 2 = 10
*/

console.log(result3);
/* 
Result = 3.
Same as in multiplication, in subtraction Javascript performs 
implicit type converts a string to number before performing 
the operation. 5 - 2 = 3
*/

console.log(result4);
/* 
Result = Infinity
This is the "divided by zero" error. Javascript again attempts to 
convert string "5" to a number, but the result outcome of 5 / 0 is
Infinity, which is the result of dividing any non-zero by 0.
*/

console.log(result5);
/* 
Result = string
Because Javascript converted b to a string, the data type of result5, is 
of course a string  ("5" + "2")

******************************************************************/

// 2. Arrays - Array Manipulation

// Step 1: Create an array of numbers [1, 2, 3, 4, 5]
let numbers = [1, 2, 3, 4, 5];

// Step 2: Remove the middle element without using .splice()
delete numbers[2];

// Step 3: Add the number 10 at the beginning and 20 at the end
numbers.unshift(10);
numbers.push(20);

// Step 4: Reverse the array
numbers.reverse();

// Step 5: Output the final array
numbers.forEach((elm) => {
	console.log(elm);
});

/******************************************************************/
console.log("\n3. Loops - Conditional Iteration and Termination.");
// 3. Loops - Conditional Iteration and Termination

console.log("\nSkip multiples of 3");
// 1. Print numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
	// 2. Skip multiples of 3
	if (i % 3 == 0) {
		continue;
	}
	// 3. Stop the loop if the number is greater than 15 AND is divisible by 5
	if (i > 15 && i % 5 == 0) {
		break;
	}
	console.log(i);
}

/******************************************************************/
// 4. Operators - Comparison and Type Coercion
console.log("\n4. Operators - Comparison and Type Coercion.");

let x = 5;
let y = "6";

console.log(x == y); // false, because JS with "==" performs type coercion, then
// it compares both values.
console.log(x === y); // false, In strick equality, variables data types are being
// compared as well besides their values.
console.log(x != y); // true, 5 is not equal to 6 with bot loose and strict equality operators.
console.log(x !== y); // true, 5 is not equal to "6" in strick equality (comparing
// a number to a string in this case is false).

/******************************************************************/
console.log("\n5. Conditional Statements - Access Control Logic");

let isAdmin = false;
let isEditor = true;
let isBanned = false;

/* 
// Write a condition:
// - If the user is banned, print "Access Denied"
// - Else if admin or editor, print "Access Granted"
// - Else print "Read-Only Access"
*/

// Check if the user is banned
if (isBanned) {
	console.log("Access Denied");
} else if (isAdmin || isEditor) {
	console.log("Access Granted");
} else {
	console.log("Read-Only Access");
}

/******************************************************************/

console.log("\nBonus: Integrated Exercise - Grading System");

// Given an array of student scores:
let scores = [95, 67, 89, 45, 74, 99, 80];

/* 
Loop through the array
- If the score is >= 90, print "A"
- If it's between 70 and 89, print "B"
- If between 50 and 69, print "C"
- If less than 50, print "F"
BUT: Skip printing if the score is divisible by 5 AND is even.
*/
console.log("Grade for each score");
// Grade for each score solution
for (let i = 0; i < scores.length; i++) {
	// Check if score is divisible by 5 AND is even.
	if (scores[i] % 5 == 0 && scores[i] % 2 == 0) {
		// score 80 will be skipped
		continue;
	}
	if (scores[i] >= 90) {
		console.log("A");
	} else if (scores[i] >= 70 && scores[i] < 90) {
		console.log("B");
	} else if (scores[i] >= 50 && scores[i] < 70) {
		console.log("C");
	} else {
		console.log("F");
	}
}
console.log("\nGrade for the average score");
// Grade for the average score solution
let totalScores = 0;
let sum = 0;
let avg;

for (let i = 0; i < scores.length; i++) {
	// Skip printing if the score is divisible by 5 AND is even.
	if (scores[i] % 5 == 0 && scores[i] % 2 == 0) {
		// score 80 will be skipped
		continue;
	}
	totalScores += 1;
	sum += scores[i];
}

console.log(`Sum = ${sum}`);
console.log(`Scores Total = ${totalScores}`);
avg = sum / totalScores;
console.log(`Avg = ${avg}`);

if (avg >= 90) {
	console.log("Average Score = A");
} else if (avg >= 70 && avg < 90) {
	console.log("Average Score = B");
} else if (avg >= 50 && avg < 70) {
	console.log("Average Score = C");
} else {
	console.log("Average Score = F");
}
