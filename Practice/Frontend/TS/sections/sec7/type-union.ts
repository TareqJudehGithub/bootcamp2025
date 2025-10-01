let age: number | string = 45;
age = "45";

type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

// So here we could choose between two object types:
let coordinates: Point | Loc = { x: 1, y: 34 };
