// 1. Use strict
// Whole-script strict mode syntax
// Javascript is very flexible
// flexible === dangerous
// added in ECMAScript 5
'use strict';


// 2. Variable, (read/write)
// let (added in ES6)
let globalName = 'global name';   // 전역변수 

{
    let myName = 'eunhyung';
    console.log(myName);
    myName = 'hello';
    console.log(myName);
    console.log(globalName);  // 전역변수는 어디서든 접근 가능
}
// console.log(myName)   // myName is not defined
console.log(globalName);  // 전역변수는 어디서든 접근 가능

// var (don't ever user this!)
// console.log(age);    // undefined => var hoisting
// 어디에서 선언하든 상관없이 맨 상단으로 끌어올려지는 것을 의미한다.

// has no block scope
{
    age = 4;
    var age;
}

console.log(age);   // 블럭스코프가 없기 때문에 어디서든 접근이 가능하다.

// 3. Constant, (read only)
// use const whenever possible.
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

// Note !
// Immutable data types : primitive types, frozen objects(i.3. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, NaN
const infinity = 1 / 0 ;
const negativeInfinify = -1 / 0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinify);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890;  // over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1;   // false
console.log(`value:${canRead}, type:${typeof canRead}`);
console.log(`value:${test}, type:${typeof test}`);

// null
let nothing = null;
console.log(`value :${nothing}, type: ${typeof nothing}`);

// undefined
let x ;
console.log(`value: ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)   // symbol만은 출력 못함. '.description'을 써야함

// object, real-life object, data structure
const ellie = {name : 'ellie', age : 20};
ellie.age = 21;
console.log(ellie);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value:${text}, type:${typeof text}`);
text = 1;
console.log(`value:${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value:${text}, type:${typeof text}`);
text = '8' / 2;
console.log(`value:${text}, type:${typeof text}`);