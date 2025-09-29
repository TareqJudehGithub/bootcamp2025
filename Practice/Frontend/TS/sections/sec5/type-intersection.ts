type Circle = {
	radius: number;
};

type Colorful = {
	color: string;
};

// Combine two types using &
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
	radius: 4,
	color: "Yellow",
};

type Cat = {
	numLives: number;
};
type Dog = {
	breed: string;
};

// Combine 3 types. Not recommended but it works
type CatDog = Cat & Dog & { age: number };

const oliver: CatDog = {
	numLives: 9,
	breed: "Seyami",
	age: 3,
};
