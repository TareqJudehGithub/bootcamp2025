let user: User = {
	name: "John",
	age: 50,
	isAdmin: true,
	id: "abc", // or 123
};

type User = {
	id: string | number;
	name: string;
	age: number;
	isAdmin: boolean;
};

console.log(user);

const friends: Array<string> = ["John", "Sarah", "William"];
const otherFriends: string[] = ["John", "Sarah", "William"];

const user2: User = {
	id: "123",
	name: "john",
	age: 25,
	isAdmin: true,
};
