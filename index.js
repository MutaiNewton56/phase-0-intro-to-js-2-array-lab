// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

// console.log(cats);
// destructivelyAppendCat("Tom");
// console.log(cats);

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return cats.concat(name);
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}

// Example usage
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]

destructivelyPrependCat("Tom");
console.log(cats); // Output: ["Tom", "Milo", "Otis", "Garfield"]

destructivelyRemoveLastCat();
console.log(cats); // Output: ["Tom", "Milo", "Otis"]

destructivelyRemoveFirstCat();
console.log(cats); // Output: ["Milo", "Otis"]

console.log(appendCat("Jim")); // Output: ["Milo", "Otis", "Jim"]
console.log(prependCat("Bob")); // Output: ["Bob", "Milo", "Otis"]
console.log(removeLastCat()); // Output: ["Milo", "Otis"]
console.log(removeFirstCat()); // Output: ["Otis", "Garfield"]
