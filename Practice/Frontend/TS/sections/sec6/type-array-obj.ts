const movies: object[] = [
	{
		title: "Alien",
		year: 1975,
		isInTheater: true,
	},
];

type Numbers = {
	x: number;
	y: number;
	z?: number;
};

const coords: Numbers[] = [
	{
		x: 15,
		y: 20,
		z: 30,
	},
];

coords.push({ x: 13, y: 17, z: 24 });
