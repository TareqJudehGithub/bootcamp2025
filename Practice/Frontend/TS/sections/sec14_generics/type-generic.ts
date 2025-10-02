const numbers: Array<number> = [];

// normal functions
function numberIdentity(item: number): number {
	return item;
}

function stringIdentity(item: string): string {
	return item;
}
function booleanIdentity(item: boolean): boolean {
	return item;
}

// Generic function
function identity<T>(item: T): T {
	return item;
}

identity<number>(7);
identity<string>("userName");

/*
This function accepts an array, and return a random element from that array.
*/

function getRandomElement<T>(list: T[]): T {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}

// now getRandomElement function can be reused with other types
const randomTeam = getRandomElement<string>([
	"A.C Milan",
	"Juventus",
	"Inter Milan",
]);

console.log(randomTeam);
console.log("");
