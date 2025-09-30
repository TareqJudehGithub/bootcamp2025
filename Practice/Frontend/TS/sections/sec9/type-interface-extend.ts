enum Gender {
	MALE = "Male",
	FEMALE = "Female",
}
interface EmployeeModel {
	id: number | string;
	firstName: string;
	lastName: string;
	gender: Gender;
}
interface Salary extends EmployeeModel {
	salary: number;
	tax: number;
	netSalary(): number;
}

const empSarahAdams: Salary = {
	id: 1,
	firstName: "Sarah",
	lastName: "Adams",
	gender: Gender.FEMALE,
	salary: 750,
	tax: 0.05,
	netSalary() {
		return this.salary - this.salary * this.tax;
	},
};

console.log(
	empSarahAdams.firstName,
	empSarahAdams.salary,
	empSarahAdams.gender
);
console.log(empSarahAdams.netSalary());
