console.log("Functions Exercises\n");

// 1. Greet a User
console.log("\nGreet a user");
function greet(name) {
	return `Hello, ${name}!`;
}
console.log(greet("John Smith"));

// 2. Even or Odd
console.log("\nEven or Odd");
function isEven(n) {
	return n % 2 == 0;
}
console.log(isEven(10));
console.log(isEven(13));
console.log(isEven(15));

// 3. Max of Three Numbers
console.log("\nMax of Three Numbers");
function maxOfThree(a, b, c) {
	let largestNum = 0;
	if (largestNum > a) {
		largestNum = a;
	} else if (largestNum > b) {
		largestNum = b;
	} else {
		largestNum = c;
	}
	return `The largest number is between ${a}, ${b}, and ${c} is ${largestNum}`;
}
console.log(maxOfThree(10, 20, 30));
console.log(maxOfThree(300, 150, 200));
console.log(maxOfThree(37, 85, 55));

// 4. Reverse a String
console.log("\nReverse a String");

function reverseString(str) {
	let reversedString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}
	return reversedString;
}
console.log(reverseString("Hello World!"));

// 5. Count Vowels
console.log("\nCount Vowels");
function countVowels(str) {
	let vowels = ["A", "E", "I", "O", "U"];
	let newString = String(str);
	let counter = 0;

	for (let i = 0; i < vowels.length; i++) {
		if (
			newString.includes(vowels[i].toLocaleLowerCase()) ||
			newString.includes(vowels[i].toLocaleUpperCase())
		) {
			counter++;
		}
	}
	return counter;
}
console.log(countVowels("UnicOrn"));

// 6. Palindrome Check
console.log("\nPalindrome Check");
function isPalindrome(str) {
	let stringToCheck = String(str);
	return stringToCheck[0] == stringToCheck[stringToCheck.length - 1];
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// 7. Find Longest Word
console.log("\nFind Longest Word");

function findLongestWord(sentence) {
	let stringSentence = String(sentence);
	let wordsArray = stringSentence.split(" ");
	let longestWord = String("");

	for (let i = 0; i < wordsArray.length; i++) {
		if (wordsArray[i].length > longestWord.length) {
			console.log(longestWord.length);
			longestWord = wordsArray[i];
		}
	}
	return `The longest word is ${longestWord}`;
}

let sentence =
	"JavaScript is fun language to learn in 2025! It is easy, modern, and a job-in-demand language in 2025";
console.log(findLongestWord(sentence));

console.log("\nSquare Value");

function squareValue(arr) {
	arr.forEach((ele) => {
		console.log(Math.pow(ele, 2));
	});
}

let numbersArr = [3, 4, 8, 6, 7];
squareValue(numbersArr);
