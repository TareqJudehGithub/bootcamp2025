function doublePoint(point: { x: number; y: number }): {
	x: number;
	y: number;
} {
	return { x: point.x * 2, y: point.y * 2 };
}

// First we specify a type alias using the 'type' keyword
// The type variable is usually a PascalCase.

type Point = {
	x: number;
	y: number;
};

function aliasFunc(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}

type Dimensions = {
	height: number;
	width: number;
};

function calculateArea(shape: Dimensions): number {
	return shape.height * shape.width;
}

console.log(doublePoint({ x: 2, y: 4 }));
console.log(aliasFunc({ x: 2, y: 4 }));
console.log(calculateArea({ height: 8, width: 4 }));
