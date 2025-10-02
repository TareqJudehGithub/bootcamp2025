interface Color {
	color: string;
}

class Bike implements Color {
	Model: string;
	Year: number;
	color: string;

	constructor(model: string, year: number, color: string) {
		this.Model = model;
		this.Year = year;
		this.color = color;
	}
}

class Car extends Bike {
	constructor(model: string, year: number, color: string) {
		super(model, year, color);
	}
}

const bmx = new Bike("BMX", 1985, "red");
const GMC = new Car("GMC Envoy", 2006, "Charcoal");

// abstract

abstract class Employee {
	first: string;
	last: string;
	salary: number;
	constructor(first: string, last: string, salary: number) {
		this.first = first;
		this.last = last;
		this.salary = salary;
	}

	public abstract employeeDetails(): string;
	public abstract getPaid(): number;
}

class fullTimeEmployee extends Employee {
	constructor(first: string, last: string, salary: number) {
		super(first, last, salary);
	}
	public employeeDetails(): string {
		return `${this.first} ${this.last}`;
	}
	public getPaid(): number {
		return this.salary;
	}
}
class partTimeEmployee extends Employee {
	constructor(first: string, last: string, salary: number) {
		super(first, last, salary);
	}
	public employeeDetails(): string {
		return `${this.first} ${this.last}`;
	}
	public getPaid(): number {
		return this.salary;
	}
}

const johnSmith = new fullTimeEmployee("John", "Smith", 1500.99);
console.log(johnSmith.employeeDetails());
console.log(johnSmith.getPaid());
