import { useState } from "react";

import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

import Product from "./components/models/products";

import "./App.css";

function App() {
	const items = [
		{ id: 1, product: "Lemon", quantity: 50, description: "Fresh lemon" },
		{ id: 2, product: "Apples", quantity: 7, description: "Fresh apples" },
	];
	const [product, setProduct] = useState<Product[]>(items);
	return (
		<div className="">
			<ShoppingList products={product} />
			<ShoppingListForm />
		</div>
	);
}

export default App;

// interface
