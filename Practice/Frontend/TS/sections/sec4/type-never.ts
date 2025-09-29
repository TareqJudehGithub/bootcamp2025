// Type never

// Don't return anything.
function makeError(msg: string): never {
	throw new Error(msg);
}
