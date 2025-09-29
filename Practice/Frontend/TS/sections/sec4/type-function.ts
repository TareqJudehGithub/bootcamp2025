function square(num: number): number {
	return num * num;
}

console.log(square(3));

function greetUser(userName: string): string {
	return `Hello, ${userName}`;
}

greetUser("john-45");

// Arrow function format with TS annotations
const add = (a: number, b: number): number => a * b;
