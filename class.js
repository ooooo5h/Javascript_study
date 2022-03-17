'use strict';
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor  생성자
    constructor(name, age) {
        // fields  전달받은 데이터를 할당해주기
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello !`);
    }
}

const eunhyung = new Person('eunhyung', 32);
console.log(eunhyung.name);
console.log(eunhyung.age);
eunhyung.speak();