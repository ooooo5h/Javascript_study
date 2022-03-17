// Objects
// one of the javascript's data types.
// a collection of related data and/ or functionality.
// nearly all objects in javascript are instances of object
// object = { key : value}

// 1. Literals and properties 
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const eunhyung = {name : 'eunhyung', age : 32};
print(eunhyung);

// with Javascript magic ( dynamically typed language)
// can add properties later
eunhyung.hasJob = false;
console.log(eunhyung.hasJob);

// can delete properties later
delete eunhyung.hasJob;
console.log(eunhyung.hasJob);