interface PersonModel {
	id: string;
	firstName: string;
	lastName: string;
	userName: string;
	// sayHi must be a method, and must return a string
	sayHi: () => string;
}

const empJohn: PersonModel = {
	id: "001",
	firstName: "John",
	lastName: "Smith",
	userName: "john.smith@gmail.com",
	sayHi: () => `Hi, it's ${empJohn.firstName}`,
};

interface Product {
	name: string;
	price: number;
	applyDiscount(discount: number): number;
}

const shoes: Product = {
	name: "Nike Air",
	price: 200,
	applyDiscount(discount: number) {
		return this.price - this.price * discount;
	},
};

console.log(`$${shoes.applyDiscount(0.2).toFixed(2)}`);
