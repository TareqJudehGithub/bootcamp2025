import React, { JSX, useRef, useState } from "react";
import Product from "./models/products";

function ShoppingListForm(props: ShoppingListFormProps): JSX.Element {
	const inputRef = useRef<HTMLInputElement>(null);
	const [product, setProduct] = useState<string>("");
	const [quantity, setQuantity] = useState<number>(0);
	const [description, setDescription] = useState<string>("");

	// Handles
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		// const newProduct = inputRef.current?.value;
		// props.onAddProduct(newProduct);
		// inputRef.current.value = "";

		const newProduct: Product = {
			id: props.products.length + 1,
			product: product,
			quantity: quantity,
			description: description,
		};
		props.onAddProduct(newProduct);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Product name.."
				value={product}
				onChange={(e) => setProduct(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Qty.."
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			/>
			<input
				type="text"
				placeholder="Product Description.."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type="submit">Add Item</button>
		</form>
	);
}
export default ShoppingListForm;

interface ShoppingListFormProps {
	products: Product[];
	onAddProduct: (item: Product) => void;
}
