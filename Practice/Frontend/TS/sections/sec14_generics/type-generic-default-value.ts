function makeList<T = string>(): T[] {
	return [];
}

const strOfArr = makeList();

strOfArr.push("First Item");
console.log(strOfArr.length);
