function add(a: number, b: number): number {
	return a + b;
}

function calculate(a: number, b: number, calcFn: AddFn) {
	return calcFn(a, b);
}

const calcFnOutput = calculate(5, 10, add);
console.log(calcFnOutput);

type AddFn = (a: number, b: number) => number;
