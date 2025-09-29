type Numbers = {
	x: number;
	y: number;
	z?: number;
};

function sum(numbers: Numbers): number {
	return numbers.x + numbers.y;
}

const scores = {
	math: 88,
	science: 89,
};
console.log(sum({ x: 88, y: 89 }));
