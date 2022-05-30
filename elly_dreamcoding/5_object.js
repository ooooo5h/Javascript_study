// Objects
// one of the Javascript's data types.
// a collection of related data and/or funtionality.
// Nearly all objects in Javascript are instances of Object.
// object = { key : value };

// 1. Literals and properties
const obj1 = {};   // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax


function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const eunhyung = {name : 'eunhyung', age : 32};
print(eunhyung);

// 아래의 코드들은 가능하지만, 이런 식의 코드는 쓰지 않도록 하자.
// with JavaScript magic (dynamically typed language)
// can add properties later
eunhyung.hasJob = false;
console.log(eunhyung.hasJob);

// can delete properties later
delete eunhyung.hasJob;

// 2. Computed properties
// key should be always string
console.log(eunhyung.name);
console.log(eunhyung['name']);   

// 3. Property value shorthand
const person1 = { name : 'bob', age : 2};
const person2 = { name : 'steve', age : 3};
const person3 = { name : 'dave', age : 4};
const person4 = new Person('eunhyung', 32);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existence check (key in ob)
console.log('name' in person4);
console.log('gender' in person4);
console.log(person4.gender);   // 존재하지 않는 값에 접근하면 undefined로 출력됨

// 6. for..in vs for>>of
// for (key in obj)
console.clear();
for (key in person4) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5]
for (num of array) {
    console.log(num);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3..])
const user = {name :'은형', age :32};
const user2 = user;
user2.name = 'coder';
console.log(user.name);

// const user4 = {};
// Object.assign(user4, user);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color :'red'};
const fruit2 = { color :'blue', size :'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);  // blue
console.log(mixed.size);   // big
// 이유 => 값을 덮어쓴다! 마지막의 fruit2가 fruit1을 덮어쓴다!