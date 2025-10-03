interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: "rooster";
}
interface Cow {
	name: string;
	weight: number;
	age: number;
	kind: "cow";
}
interface Horse {
	name: string;
	weight: number;
	age: number;
	kind: "horse";
}
type FarmAnimal = Rooster | Cow | Horse;

function getFarmAnimalSound(animal: FarmAnimal): string {
	let sound: string = "";
	switch (animal.kind) {
		case "cow":
			sound = "mooo";
			break;
		case "rooster":
			sound = "ko ko";
			break;
		case "horse":
			sound = "neee";
			break;
		default:
			const other: never = animal; // in case another type was type in params.
	}
	return sound;
}

const bruce: Cow = {
	name: "Bruce",
	weight: 100,
	age: 5,
	kind: "cow",
};

getFarmAnimalSound(bruce);
