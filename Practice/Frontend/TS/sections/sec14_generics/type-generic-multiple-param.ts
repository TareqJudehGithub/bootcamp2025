function merge<T, U>(obj1: T, obj2: Object) {
	return {
		...obj1,
		...obj2,
	};
}

const userInfo = {
	personName: "john",
	address: "john's address",
};
const moreInfo = {
	gender: "male",
	birthDate: "27-06-1975",
};
console.log(merge(userInfo, moreInfo));
