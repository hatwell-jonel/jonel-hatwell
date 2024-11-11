let fruits = ["Apple", "Orange", "Banana", "Mango", "Grapes", "Strawberry", "Watermelon", "Pineapple", "Kiwi", "Guava", "Papaya", "Cherry", "Lemon", "Lime", "Peach", "Nectarine", "Durian", "Fig", "Date", "Coconut", "Apricot", "Avocado", "Banana", "Blueberry", "Blackberry", "Cantaloupe", "Clementine", "Cranberry", "Currant", "Fig", "Gooseberry", "Grape", "Honeydew", "Huckleberry", "Jackfruit", "Jujube", "Kiwi", "Kumquat", "Lemon", "Lime", "Lychee", "Mango", "Melon", "Mulberry", "Nectarine", "Olive", "Orange", "Papaya", "Passion Fruit", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Prune", "Raspberry", "Salad", "Satsuma", "Strawberry", "Tangerine", "Tomato", "Watermelon", "Winter Melon", "Yellow Melon"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//  modifying
fruits[0] = "Banana";
fruits.push("Apple");
 fruits.pop(); // remove last element
 console.log("modified fruits", fruits);

//  array iteration
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// arrat forEach method
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
colors.forEach(function(color) {
    console.log(color);
});

// method and properties

console.log(numbers.length);
console.log(numbers.indexOf(3));
console.log(numbers.includes(3));
console.log(numbers.join(" - "));
console.log("slice", numbers.slice(1, 4));
console.log("splice", numbers.splice(1, 3));
console.log("reverse", numbers.reverse());