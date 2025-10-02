// Return all items from a list
function displayItems<T>(list: T[]): string {
	let items: string;
	items = list.map((item) => console.log(item)).join("\n");
	return items;
}

const cities: string[] = ["Amman", "New York", "Tokyo", "Sydney"];

const citiesStr = displayItems<string>(cities);
console.log(citiesStr);
