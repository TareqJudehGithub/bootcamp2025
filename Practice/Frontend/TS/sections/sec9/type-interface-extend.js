var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
})(Gender || (Gender = {}));
var empSarahAdams = {
    id: 1,
    firstName: "Sarah",
    lastName: "Adams",
    gender: Gender.FEMALE,
    salary: 750,
    tax: 0.05,
    netSalary: function () {
        return this.salary - this.salary * this.tax;
    },
};
console.log(empSarahAdams.firstName, empSarahAdams.salary, empSarahAdams.gender);
console.log(empSarahAdams.netSalary());
