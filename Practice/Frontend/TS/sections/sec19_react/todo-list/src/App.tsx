// React
import { useState } from "react";

// Components
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";

// Data
import Product from "./components/models/products";

// Styling
import "./App.css";

function App() {
	const items: Product[] = [
		{ id: 1, product: "Lemon", quantity: 50, description: "Fresh lemon" },
		{ id: 2, product: "Apples", quantity: 7, description: "Fresh apples" },
	];
	const [products, setProducts] = useState<Product[]>(items);

	// Handlers
	function handleAddItem(item: Product) {
		setProducts((items) => [...items, item]);
	}

	const addItem = (product: Product) => {
		console.log("Make it to the App component!");
		setProducts((products) => [product, ...products]);
	};

	return (
		<div className="">
			<ShoppingList products={products} />
			<ShoppingListForm products={products} onAddProduct={addItem} />
		</div>
	);
}

export default App;

// interface
