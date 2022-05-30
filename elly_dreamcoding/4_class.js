'use strict';

// object-oriendted programming
// class : template
// object : instance of a class
// javascript classes
// - introduced is es6
// - syntactical sugar over prototype-based inferitance

// 1. Class declarations
class Person {
    //constructor  생성자
    constructor (name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const eunhyung = new Person('eunhyung', 32);
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
        // if (value < 0){
        //     throw Error('age can not be negative.')
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);  // 2 출력
console.log(experiment.privateField);  // undefined 출력

// 4. Static properties and methods
// 공통적으로 클래스에서 써야하는 기능이라면 static을 사용!!
// too soon!
class Article {
    static publisher = 'dream coding';
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher)   // undefined출력
console.log(Article.publisher);   // dream coding

// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color !`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    // 오버라이딩 => 재정의
    draw() {
        super.draw();    // 부모 클래스것도 쓰기
        console.log('삼각형 뿅');
    }

    // 오버라이딩
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 2, 'blue');
rectangle.draw();

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
// 왼쪽이 오른쪽 클래스의 인스턴스인지 여부를 불로 리턴.
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);  // false
console.log(triangle instanceof Triangle);  // true
console.log(triangle instanceof Shape);     // true
console.log(triangle instanceof Object);    // true
// 모든 오브젝트는 오브젝트를 상속한 아이들이다!!