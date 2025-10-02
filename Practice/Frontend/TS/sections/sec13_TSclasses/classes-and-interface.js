var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bike = /** @class */ (function () {
    function Bike(model, year, color) {
        this.Model = model;
        this.Year = year;
        this.color = color;
    }
    return Bike;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, year, color) {
        return _super.call(this, model, year, color) || this;
    }
    return Car;
}(Bike));
var bmx = new Bike("BMX", 1985, "red");
var GMC = new Car("GMC Envoy", 2006, "Charcoal");
// abstract
var Employee = /** @class */ (function () {
    function Employee(first, last, salary) {
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    return Employee;
}());
var fullTimeEmployee = /** @class */ (function (_super) {
    __extends(fullTimeEmployee, _super);
    function fullTimeEmployee(first, last, salary) {
        return _super.call(this, first, last, salary) || this;
    }
    fullTimeEmployee.prototype.employeeDetails = function () {
        return "".concat(this.first, " ").concat(this.last);
    };
    fullTimeEmployee.prototype.getPaid = function () {
        return this.salary;
    };
    return fullTimeEmployee;
}(Employee));
var partTimeEmployee = /** @class */ (function (_super) {
    __extends(partTimeEmployee, _super);
    function partTimeEmployee(first, last, salary) {
        return _super.call(this, first, last, salary) || this;
    }
    partTimeEmployee.prototype.employeeDetails = function () {
        return "".concat(this.first, " ").concat(this.last);
    };
    partTimeEmployee.prototype.getPaid = function () {
        return this.salary;
    };
    return partTimeEmployee;
}(Employee));
var johnSmith = new fullTimeEmployee("John", "Smith", 1500.99);
console.log(johnSmith.employeeDetails());
console.log(johnSmith.getPaid());
