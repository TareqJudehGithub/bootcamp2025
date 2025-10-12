const subjects: Array<string> = ["science", "math", "ICT"];

type DataStorage<T> = {
	storage: T[];
	add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
	storage: ["Box Files", "Pencils", "Stablers"],
	add(data) {
		console.log(data);
	},
};

// Another example with more than one parameter

// We define the generic function first with multiple parameters and expected return
function merge<T, U, X>(a: T, b: U, c: X) {
	return {
		...a,
		...b,
		...c,
	};
}

// After that, we define a variable, with parameter values to the T, U, X generic types
// define up in merge function. I also define a User interface to control the property
// types.
const userDetails: User = merge<
	{ userName: string[] },
	{ password: string[] },
	{ age: number[] }
>(
	{ userName: ["John Smith", "Sarah Adams"] },
	{ password: ["johnny123@"] },
	{ age: [50] }
);

interface User {
	userName: string[];
	password: string[];
	age: number[];
}

console.log(userDetails);
