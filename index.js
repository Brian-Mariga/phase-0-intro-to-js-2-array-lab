// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    name = cats.push("Ralph")
}

function destructivelyPrependCat(name){
    name = cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    name = cats.pop()
}

function destructivelyRemoveFirstCat(name){
    name = cats.shift()
}

function appendCat(name){
    name = [...cats, "Broom"];
    return name;
}

function prependCat(name){
    name = ["Arnold", ...cats];
    return name;
}

function removeLastCat(name){
    name = cats.slice(0, cats.length -1);
    return name;
}

function removeFirstCat(name){
    name = cats.slice(1);
    return name;
}