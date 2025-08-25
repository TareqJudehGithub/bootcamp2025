// Promises

const newPromise = new Promise((resolve, reject) => {
	let sucess = true;

	if (sucess) {
		console.log("Success!");
	} else {
		console.log("Failure!");
	}
});

newPromise.then((res) => console.log(res)).catch((err) => console.log(err));

let requestCompleted = true;
let firstTask = new Promise((resolve, reject) => {
	if (requestCompleted) {
		setTimeout(() => {
			resolve("Request completed!");
		}, 1000);
	} else {
		setTimeout(() => {
			reject("Request Failed!");
		}, 1000);
	}
});

firstTask.then((res) => console.log(res)).catch((err) => console.log(err));

// async await

async function getApiData() {
	let response = await fetch("google.com");
	console.log("Execute next code");
}

async function processTasks() {
	let result1 = await goodMorning();
	let result2 = await goodEvening();
	let result3 = await goodNight();
	let result4 = await fetch("https://www.google.com/");

	console.log(result4);
}

function goodMorning() {
	console.log("Good morning!");
}
function goodEvening() {
	console.log("Good evening!");
}

function goodNight() {
	console.log("Good Night!");
}

processTasks();
