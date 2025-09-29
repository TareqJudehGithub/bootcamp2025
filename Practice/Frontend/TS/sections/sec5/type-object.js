function printName(person) {
    return "Hello, ".concat(person.first);
}
console.log(printName({ first: "John", last: "Smith" }));
function employeeDetails(employee) {
    return "Employee Details:\nName: ".concat(employee.empName, "\nEmail: ").concat(employee.empEmail, "\nAge: ").concat(employee.empAge);
}
var empJohn = employeeDetails({
    empName: "John Smith",
    empEmail: "john45@gmail.com",
    empAge: 45,
});
console.log(empJohn);
var coordinate = {
    x: 34,
    y: 2,
};
// Annotating object return type of a function
function pinLocation(obj) {
    return obj;
}
var homePin = pinLocation({ x: 34, y: 2 });
console.log(homePin);
