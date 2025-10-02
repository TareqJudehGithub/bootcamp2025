var numbers = [];
// normal functions
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// Generic function
function identity(item) {
    return item;
}
identity(7);
identity("userName");
/*
This function accepts an array, and return a random element from that array.
*/
function getRandomElement(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
// now getRandomElement function can be reused with other types
var randomTeam = getRandomElement([
    "A.C Milan",
    "Juventus",
    "Inter Milan",
]);
console.log(randomTeam);
console.log("");
// Return all items from a list
function displayItems(list) {
    var items;
    items = list.map(function (item) { return console.log(item); }).join("\n");
    return items;
}
var cities = ["Amman", "New York", "Tokyo", "Sydney"];
var citiesStr = displayItems(cities);
console.log(citiesStr);
// return longest word
function findLongestWord(word) {
    var longestWord;
    word.map(function (w) {
        if (w > longestWord) {
            longestWord = w;
        }
    });
    return longestWord;
}
var longestStr = findLongestWord(cities);
console.log(longestStr);
