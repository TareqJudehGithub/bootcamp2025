function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toLocaleString());
    }
    else {
        console.log(new Date(date).toLocaleString());
    }
}
printFullDate(new Date());
