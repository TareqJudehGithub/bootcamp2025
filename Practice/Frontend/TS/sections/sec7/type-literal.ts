// Zero here cannot be anything but zero
let zero: 0 = 0;

// Same case here with a string
let friday: "Friday" = "Friday";
// friday = "Saturday";    => This will throw a type error.

// Best scenario to use literal types is to use union types
let giveAnswer = (answer: "yes" | "no"): string => {
	return answer;
};

// Another example is the dayOfWeek type (not variable);
type DayOfWeek =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";
