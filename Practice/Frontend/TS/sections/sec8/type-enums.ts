enum OrderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED,
}

let packageStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
	return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(packageStatus));
// Returns true

enum HTTPResponse {
	OK = 200,
	NOTAUTHORIZED = 401,
	NOTFOUND = 404,
	CONNECTIONERROR = 500,
}

enum Directions {
	UP = "arrowUp",
	DOWN = "arrowDown",
	LEFT = "arrowLeft",
	RIGHT = "arrowRight",
}

enum DaysOfWeek {
	MON = "Monday",
	TUES = "Tuesday",
	WED = "Wednesday",
	THUR = "Thursday",
	FRI = "Friday",
	SAT = "Saturday",
	SUN = "Sunday",
}

// Check if the day of the week enter by the user equals to DaysOfWeek enum items.
function printDay(today: string): boolean {
	return today === DaysOfWeek.TUES;
}

console.log(printDay("Tuesday"));
