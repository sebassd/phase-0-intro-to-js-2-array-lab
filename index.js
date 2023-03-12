// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
  cats.push(name);
}

function destructivelyPrependCat (name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat () {
  cats.pop();
}

function destructivelyRemoveFirstCat () {
  cats.shift();
}

function appendCat (name) {
  return [...cats, name];
}

function prependCat (name) {
  return [name, ...cats];
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}

destructivelyAppendCat ("Ralph");
console.log(cats)
destructivelyPrependCat ("Bob");
console.log(cats)
destructivelyRemoveLastCat();
console.log(cats)
destructivelyRemoveFirstCat ();
console.log(cats)
appendCat ("Broom");
console.log(cats)
prependCat("Arnold");
console.log(cats)
removeFirstCat();
console.log(cats)
removeLastCat();
console.log(cats)





