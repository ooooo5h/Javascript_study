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

// 2. Computed properties
// key should be always string type
console.log(eunhyung.name);    // 점으로 접근 가능   -> 바로 그 값을 가지고 오고 싶을 때 사용(주로 .을 사용)
console.log(eunhyung['name']);  // 배열로 계산해서 접근 가능 -> 정확히 어떤 키가 필요한 지 모를 때 사용

eunhyung['hasJob'] =  false;
console.log(eunhyung.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);  undefined > 오브젝트의 키라는 프로펄티가 들어있는 지 모름. 이럴떈 []을 사용해야함
    console.log(obj[key]);
}

printValue(eunhyung, 'name');  

// 3. Property value shorthand
const person1 = { name : 'suga', age : 30};
const person2 = { name : 'v', age : 28};
const person3 = { name : 'jhope', age : 29};
const person4 = new   Person('eunhyung', 32);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {} ;
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existance check ( key in obj)
console.log('name' in eunhyung);
console.log('age' in eunhyung);
console.log('hasjob' in eunhyung);
console.log(eunhyung.hasjob);   // undefined


// 6. for .. in vs for.. of
// for (key in obj)
console.clear();
for (key in eunhyung) {
    console.log(key);
}

// for (value of iterable)
const arr = [1,2,3,4,5];
for (value of arr) {
    console.log(value);
}

// 7. fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name : 'eh', age : '33'};
const user2 = user;
user2.name = 'coder';
console.log(user);   // name : coder로 출력된다. 왜? user, user2는 다른 레퍼런스를 갖고 있지만, 같은 값을 가리키고 있기때문에 user2의 obj를 바꿔버리면, user도 같은 값을 가리키고 있기 때문에 같이 변경이 됨!

// old way : how to just copy
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);  // 가장 뒤에 있는 아이의 값으로 덮여씌워진다는 점 주의!
console.log(mixed.color);
console.log(mixed.size);