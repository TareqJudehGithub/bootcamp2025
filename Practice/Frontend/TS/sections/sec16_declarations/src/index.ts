import axios from "axios";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: { lat: string; lng: string };
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

const url = "https://jsonplaceholder.typicode.com/users/1";

// axios
// 	.get(url)
// 	.then((res) => {
// 		console.log("Ok");
// 	})
// 	.catch((e) => console.log("Error fetching data..", e));

const getData = async function () {
	try {
		const res = await axios.get<User>(url);
		const data = await res.data;

		console.log(printUser(data));
	} catch (err) {
		console.log(err);
	} finally {
		console.log("\nCompleted fetching API data process.");
	}
};
getData();

function printUser(user: User): string {
	return `Name: ${user.name}, ${user.email}`;
}
