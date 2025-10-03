function triple(value: number | string) {
	if (typeof value === "string") {
		return value.repeat(3);
	}
	return value * 3;
}
console.log(triple(1));

// Equality narrowing
function Demo(x: string | number, y: string | boolean) {
	if (x === y) {
		x.toUpperCase();
	}
}
