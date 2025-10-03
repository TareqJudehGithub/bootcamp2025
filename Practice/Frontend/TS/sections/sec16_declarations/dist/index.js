"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://jsonplaceholder.typicode.com/users/1";
// axios
// 	.get(url)
// 	.then((res) => {
// 		console.log("Ok");
// 	})
// 	.catch((e) => console.log("Error fetching data..", e));
const getData = async function () {
    try {
        const res = await axios_1.default.get(url);
        const data = await res.data;
        console.log(printUser(data));
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("\nCompleted fetching API data process.");
    }
};
getData();
function printUser(user) {
    return `Name: ${user.name}, ${user.email}`;
}
//# sourceMappingURL=index.js.map