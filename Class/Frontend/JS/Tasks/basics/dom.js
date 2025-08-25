console.log("DoM\n");

// Get element by class name
const greenText = document.getElementsByClassName("green");

// Get element by Query Selector
const redText = document.querySelector("red");
const blueText = document.getElementById("blue");

let purpleContent = document.getElementById("purple");

if (blueText) {
	blueText.textContent = "This font is blue";
} else {
	console.warn(`element with Id ${blueText} not found.`);
}
blueText.style.backgroundColor = "blue";
console.log(blueText?.textContent);
