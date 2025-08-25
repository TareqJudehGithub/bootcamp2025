console.log("Array Manipulation Challenge\n");

// 1- Write the code to get this array outputted in the following forms:

let orgArr = ["FullStack", "Bootcamp", "By", "Coderz"];

//1. Add "2025" to the end of the array.
console.log("\n1. Add '2025' to the end of the array");
orgArr.push("2025");
console.log(orgArr);

// 2. Extract the last two elements into a new array.
console.log("\nExtract the last two elements into a new array");
orgArr = ["FullStack", "Bootcamp", "By", "Coderz"];
let byCoderz = orgArr.slice(-2);
console.log(byCoderz);

// 3.Replace "By" with "Powered By"
console.log("\nReplace 'By' with 'Powered By'");
for (let i = 0; i < orgArr.length; i++) {
	if (orgArr[i] == "By") {
		orgArr[i] = "Powered By";
	}
}
console.log(orgArr);

// 4. Reverse the array without mutating the original.
console.log("\nReverse the array without mutating the original");
orgArr = ["FullStack", "Bootcamp", "By", "Coderz"];
orgArr.reverse();
console.log(orgArr);

// 5. Remove "Bootcamp" from the array.
console.log("\nRemove 'Bootcamp' from the array");
orgArr = ["FullStack", "Bootcamp", "By", "Coderz"];
for (let i = 0; i < orgArr.length; i++) {
	if (orgArr[i] == "Bootcamp") {
		orgArr.splice(i, i);
	}
}
console.log(orgArr);

/*********************************************************** */
console.log("\n");

// 2-Using these two arrays write js code that performs these operations
// on them:
let fruits = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetables array.
console.log("\nRemove the last item from the vegetables array");
vegetables.splice(3, 4);
console.log(vegetables);

// 2. Remove the first item from the fruits array
console.log("\nRemove the first item from the fruits array");
fruits.shift();
console.log(fruits);

// 3. Find the index of "orange" in the fruits array.
console.log("\nFind the index of 'orange' in the fruits array");
let indexOfOrange = fruits.indexOf("orange");
console.log(`Index of orange = ${indexOfOrange}`);

// 4. Add that index number to the end of the fruits array.
fruits.push(String(indexOfOrange));
console.log(fruits);

// 5. Get the length of the modified vegetables array.
console.log("\nGet the length of the modified vegetables array");
let vegetablesArrLength = vegetables.length;
console.log(vegetablesArrLength);

// 6. Add that length to the end of the vegetables array.
console.log("\nAdd that length to the end of the vegetables array");
vegetables.push(String(vegetablesArrLength));
console.log(vegetables);

// 7. Combine both arrays into a new array named food (fruits fi rst).
console.log(
	"\nCombine both arrays into a new array named food (fruits fi rst)."
);
let food = fruits.concat(vegetables);
console.log(food);

// 8. Remove 2 elements from food starting at index 4.
console.log("\nRemove 2 elements from food starting at index 4");
food.splice(4, 2);
console.log(food);

// 9. Reverse the food array.
console.log("\nReverse the food array");
food.reverse();
console.log(food);

// 10. Convert the food array into a string.
console.log("\nConvert the food array into a string.");
// Converting "the reversed" food array into a string literal.
let foodString = food.join(", ");
console.log(foodString);

const numbers = [40, 1, 100, 5, 25, 10];
numbers.sort((a, b) => a - b);

console.log(numbers);
