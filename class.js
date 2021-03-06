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

// Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    
    draw () {
        super.draw()   // 부모 호출은 super 로 사용할 수 있다
        console.log('red triangle');
    }
    getArea() {
        return (this.width * this.height) / 2;   // 오버라이딩(재정의)해서 함수를 살짝 바꿀 수 있음!
    } 
}
const rectangle = new Rectangle(20,30,'blue');
rectangle.draw()
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea())

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle)  // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true   자바스크립트에서 만드는 모든 오브젝트 클래스는 오브젝트를 상속한다.

