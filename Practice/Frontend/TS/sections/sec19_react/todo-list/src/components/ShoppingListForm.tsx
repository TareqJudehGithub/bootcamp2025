import React, { JSX } from "react";

function ShoppingListForm(): JSX.Element {
	// Handles
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		console.log("Form submitted Successfully!");
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Product name.." />
			<button type="submit">Add Item</button>
		</form>
	);
}
export default ShoppingListForm;
