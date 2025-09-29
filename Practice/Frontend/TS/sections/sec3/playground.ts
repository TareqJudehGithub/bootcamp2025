console.log("Hello");
console.log(Math.round(7.32156456));
let pi: number = 3.14;

const userName: string = "Felipe";
const num1: number = 1234;
const num2: number = 5678;

function add(a: number, b: number) {
	return a + b;
}

// let sum: number = add(num1, userName);  ERROR
let sum: number = add(num1, num2);
console.log(sum);
