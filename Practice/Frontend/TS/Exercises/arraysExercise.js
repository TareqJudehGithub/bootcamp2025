// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var products = [
    {
        name: "Coffee Mug",
        price: 11.5,
    },
    {
        name: "White toast bread",
        price: 1.99,
    },
];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(arr) {
    var sum = 0;
    arr.map(function (product) { return (sum += product.price); });
    return sum;
}
var pricesTotal = getTotal(products);
console.log(pricesTotal);
