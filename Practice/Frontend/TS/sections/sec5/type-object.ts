function printName(person: { first: string; last: string }): string {
	return `Hello, ${person.first}`;
}
console.log(printName({ first: "John", last: "Smith" }));

function employeeDetails(employee: {
	empName: string;
	empEmail: string;
	empAge: number;
}): string {
	return `Employee Details:\nName: ${employee.empName}\nEmail: ${employee.empEmail}\nAge: ${employee.empAge}`;
}

const empJohn = employeeDetails({
	empName: "John Smith",
	empEmail: "john45@gmail.com",
	empAge: 45,
});

console.log(empJohn);

let coordinate: { x: number; y: number } = {
	x: 34,
	y: 2,
};

// Annotating object return type of a function

function pinLocation(obj: { x: number; y: number }): { x: number; y: number } {
	return obj;
}

// Both return types work here and in the above function
function pinLocationObj(obj: { x: number; y: number }): Object {
	return obj;
}

const homePin = pinLocation({ x: 34, y: 2 });
console.log(homePin);
