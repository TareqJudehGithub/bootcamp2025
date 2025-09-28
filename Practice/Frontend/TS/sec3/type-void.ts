// Type void we use with functions only

// anonymous function
let rgbColors = ["red", "green", "blue"];

rgbColors.map((color) => console.log(color.toUpperCase()));

// Void-returning function
function printTwice(msg: string): void {
	console.log(msg);
	console.log(msg);
	// return "";   // Here, TS will return an error
}
