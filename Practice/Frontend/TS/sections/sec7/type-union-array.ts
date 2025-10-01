const stuff: any[] = [[1, 2, 3], true, "string"]; // works but not recommended.

// Array that can contain BOTH number and string
const mix: (number | string)[] = [1, 2, 3, "one", "two", "three"];

// Array that contain ONLY strings OR numbers
const oneType: number[] | string[] = [1, 2, 3];
