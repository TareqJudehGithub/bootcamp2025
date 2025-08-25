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
// <------------------------------------------------------------------------ Note ---------------------------------------------------------------------------------->
// Bug: 'largestNum' is initialized to 0 which may break comparison logic
// especially when a, b, or c are negative or greater than 0 in unexpected order

// Start with the first number, 	let largestNum = a;

// Fixed! Thank you Eng. Bayan for your remarks!
function maxOfThree(a, b, c) {
	/*
	 * This function compares each parameter number with one another, and returns the
	 * the one with the largest value.
	 */
	let largestNum = a;
	if (b > largestNum && b > c) {
		largestNum = b;
	} else if (c > b && c > a) {
		largestNum = c;
	} else {
		largestNum = a;
	}
	return `The largest number between ${a}, ${b}, and ${c} is ${largestNum}`;
}
console.log(maxOfThree(10, 20, 30));
console.log(maxOfThree(300, 150, 200));
console.log(maxOfThree(37, 85, 55));
console.log(maxOfThree(-50, -85, 10));

// 4. Reverse a String
console.log("\nReverse a String");

function reverseString(str) {
	/*
	 * This function reverses a string using for loop.
	 */
	let reversedString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}
	return reversedString;
}
console.log(reverseString("Hello World!"));

// 5. Count Vowels
console.log("\nCount Vowels");
// <------------------------------------------------------------------------ Note ---------------------------------------------------------------------------------->
//  Fix This function only checks if each vowel exists at least once, it does NOT count total number of vowels in the string.

// Fixed! Thank you Eng. Bayan for your remarks!
function countVowels(str) {
	/*
	 * This function counts how many vowel character found in string parameter.
	 */
	const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
	let counter = 0;

	for (const char of str) {
		if (vowels.includes(char)) {
			counter++;
		}
	}
	return counter;
}
console.log(countVowels("UnicOrn"));

// 6. Palindrome Check
console.log("\nPalindrome Check");
// <------------------------------------------------------------------------ Note ---------------------------------------------------------------------------------->
//  Fix Incorrect logic: This only compares first and last character, not the full string in reverse.

// Fixed! Thank you Eng. Bayan for your remarks!
function isPalindrome(str) {
	/*
	 * This method takes a string, converts it into an array and reverse it, and finally
	 * it converts it back to a string comparing it with the original user input string.
	 */
	let charArr = str.split("");
	charArr.reverse();
	const reversedStr = charArr.join("");

	return str == reversedStr;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// 7. Find Longest Word
console.log("\nFind Longest Word");

function findLongestWord(sentence) {
	let stringSentence = String(sentence);
	let wordsArray = stringSentence.split(" ");
	let longestWord = String("");

	for (let i = 0; i < wordsArray.length; i++) {
		if (wordsArray[i].length > longestWord.length) {
			longestWord = wordsArray[i];
		}
	}
	return `The longest word is ${longestWord}`;
}

let sentence =
	"JavaScript is fun language to learn in 2025! It is easy, modern, and a job in-demand language in 2025";
console.log(findLongestWord(sentence));
