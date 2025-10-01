function printAge(age: number | string): void {
	console.log(`You are ${age} years old.`);
}

console.log(printAge(45));
console.log(printAge("45"));

function calculateTax(price: number | string, tax: number): number {
	if (typeof price === "string") {
		// Type narrowing
		price = parseFloat(price) * tax;
	}
	return price * tax;
}
