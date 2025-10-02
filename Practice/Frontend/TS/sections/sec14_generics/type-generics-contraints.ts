// extends (type) forces the function to only accept that type as a param upon
// calling.
function details<T extends object, U extends object>(obj1: T, obj2: Object) {
	return {
		...obj1,
		...obj2,
	};
}

const nameAddress: NameAdd = {
	personName: "john",
	address: "john's address",
};
const birth = {
	gender: "male",
	birthDate: "27-06-1975",
};

const fullName: string = "John Smith";

console.log(details(nameAddress, birth));

interface NameAdd {
	personName: string;
	address: string;
}
