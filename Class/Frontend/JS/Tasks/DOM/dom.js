//Functions
// 1. Use the reduce method to combine the words into a single sentence.
console.log(
	"Use the 'reduce' method to combine the words into a single sentence."
);
let words = ["I", "love", "JavaScript"];

let sentence = words.reduce((acc, word) => {
	let space = acc + " ";
	return space + word;
});
console.log(sentence);

/*************************************************************************/

console.log("\nDOM Manipulation");

console.log("\n.1 Create a 'Welcome USer' webpage");
let h2Tag = document.getElementById("h2");
let inputText = document.getElementById("text");
let button = document.getElementById("btn");
let resetUser = document.getElementById("reset-user");

// @ts-ignore
button.addEventListener("click", function () {
	// @ts-ignore
	h2Tag.innerText = "أهلا بك Welcome";
	// @ts-ignore
	h2Tag.textContent = `${h2Tag.innerHTML} ${inputText.value}!`;
});

// @ts-ignore
resetUser.addEventListener("click", function () {
	// @ts-ignore
	h2Tag.innerText = "أهلا بك Welcome!";
	// @ts-ignore
	inputText.value = "";
});

/*************************************************************************/

// 2. Create a BMI calculator
console.log("BMI Calculator");

const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmiBtn = document.getElementById("bmi-btn");
const result = document.getElementById("result");
let resetBmi = document.getElementById("reset-bmi");

// Calculate BMI
// @ts-ignore
const calculate = bmiBtn.addEventListener("click", function () {
	// @ts-ignore
	result.innerHTML = "BMI result: ";
	// @ts-ignore
	const bmi = weight.value / ((height.value / 100) * (height.value / 100));
	// @ts-ignore
	result.textContent = `${result.innerHTML} ${String(
		parseFloat(bmi.toFixed(1))
	)}`;
});

// Reset Data
// @ts-ignore
resetBmi.addEventListener("click", function () {
	// @ts-ignore
	weight.value = "";
	// @ts-ignore
	height.value = "";
	// @ts-ignore
	result.innerHTML = "BMI result: ";
});
