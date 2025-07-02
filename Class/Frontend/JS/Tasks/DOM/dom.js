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

button.addEventListener("click", function () {
	h2Tag.innerText = "أهلا بك Welcome";
	h2Tag.textContent = `${h2Tag.innerHTML} ${inputText.value}!`;
});

resetUser.addEventListener("click", function () {
	h2Tag.innerText = "أهلا بك Welcome!";
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

const calculate = bmiBtn.addEventListener("click", function () {
	result.innerHTML = "BMI result: ";
	const bmi = weight.value / ((height.value / 100) * (height.value / 100));
	//result.textContent = String(parseFloat(bmi.toFixed(1)));
	result.textContent = `${result.innerHTML} ${String(
		parseFloat(bmi.toFixed(1))
	)}`;
});
resetBmi.addEventListener("click", function () {
	weight.value = "";
	height.value = "";
	result.innerHTML = "BMI result: ";
});
