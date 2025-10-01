"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toastBread = {
    price: 1.15,
    productName: "WhiteToast",
    quantity: 25,
};
const printProduct = (product) => {
    const { quantity } = product;
    console.log(`Name: ${product.productName}, price: ${product.price}, Qty: ${quantity}`);
};
printProduct(toastBread);
