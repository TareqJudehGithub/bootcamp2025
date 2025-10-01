interface Product {
	price: number;
	productName: string;
	quantity: number;
}

const toastBread: Product = {
	price: 1.15,
	productName: "WhiteToast",
	quantity: 25,
};

const printProduct = (product: Product): void => {
	const { quantity } = product;
	console.log(
		`Name: ${product.productName}, price: ${product.price}, Qty: ${quantity}`
	);
};
printProduct(toastBread);
