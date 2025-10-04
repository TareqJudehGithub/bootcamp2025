import { JSX } from "react";
import Product from "./models/products";

function ShoppingList(props: ShoppingListProps): JSX.Element {
	return (
		<div>
			<h1>Shopping List</h1>
			<ul>
				{props.products.map((item) => (
					<li key={item.id}>
						{item.product} - {item.quantity}
					</li>
				))}
			</ul>
		</div>
	);
}
export default ShoppingList;

// interface

interface ShoppingListProps {
	products: Product[]; // Products is an array of type Product
}
