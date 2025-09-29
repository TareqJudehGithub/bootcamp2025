type User = {
	readonly id: number;
	userName: string;
};

const user: User = {
	id: 1234,
	userName: "john45.smith",
};

// user.id = 324564;    Error cannot modify a readonly variable.
