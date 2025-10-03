function printFullDate(date: Date | string): void {
	if (date instanceof Date) {
		console.log(date.toLocaleString());
	} else {
		console.log(new Date(date).toLocaleString());
	}
}

printFullDate(new Date().toDateString());
