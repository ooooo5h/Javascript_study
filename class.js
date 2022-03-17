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

// 2. Getter and setters
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;  
    }
}

const user1 = new User('eunhyung', 'jeon', -1);
console.log(user1.age);

// 3. Fields ( public, private) 
// too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment()
console.log(experiment.publicField);
console.log(experiment.privateField);  // undefined 

// 4. Static properties and methods
// too soon!
class Article {
    static publisher = 'dream coding';  // 클래스만 가지고 있는 고유한 값. 클래스 자체에 연결되어있음!
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

console.log(article1.publisher); // undefined. 클래스로만 접근이 가능함
