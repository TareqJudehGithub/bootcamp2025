var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var subjects = ["science", "math", "ICT"];
var textStorage = {
    storage: ["Box Files", "Pencils", "Stablers"],
    add: function (data) {
        console.log(data);
    },
};
function merge(a, b, c) {
    return __assign(__assign(__assign({}, a), b), c);
}
var userDetails = merge({ userName: "John Smith" }, { password: "johnny123@" }, { age: 50 });
console.log(userDetails);
