var empJohn = {
    id: "001",
    firstName: "John",
    lastName: "Smith",
    userName: "john.smith@gmail.com",
    sayHi: function () { return "Hi, it's ".concat(empJohn.firstName); },
};
var shoes = {
    name: "Nike Air",
    price: 200,
    applyDiscount: function (discount) {
        return this.price - this.price * discount;
    },
};
console.log("$".concat(shoes.applyDiscount(0.2).toFixed(2)));
