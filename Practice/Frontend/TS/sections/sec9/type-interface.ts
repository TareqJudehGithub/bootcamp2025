interface Point {
	x: number;
	y: number;
	z?: number;
}

const coords: Point = { x: 12.545, y: 98.5465 };

interface Person {
	readonly id: number;
	firstName: string;
	lastName: string;
	userName: string;
	address?: string;
}

const tomPerson: Person = {
	id: 1,
	firstName: "Tom",
	lastName: "Davids",
	userName: "tom@gmail.com",
};
console.log(tomPerson.id);
