// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1);  // add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // remainder
console.log(2 ** 3);  // exponentiation  

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`)
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`)
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y ; // x = x + y;
x -= y ;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value   => 무거운 함수실행프로그램같은 경우 맨 마지막이 좋다
console.log(`or : ${value1 ||  value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('메롱')
    }
    return true;
}

// ! (not)
console.log(!value1) // true가 리턴됨

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const eunhyung1 = {name : 'eunhyung'};
const eunhyung2 = {name : 'eunhyung'};
const eunhyung3 = eunhyung1;
console.log(eunhyung1 == eunhyung2); // false??? false인 이유 : 오브젝트는 레퍼런스의 형태로 메모리에 탑재된다. 똑같은 값을 가지고 있어도 각각 다른 레퍼런스가 메모리에 들어가있기 때문!!
console.log(eunhyung1 === eunhyung2); // false
console.log(eunhyung1 === eunhyung3); // true

// equality - puzzler
console.log( 0 == false); // true
console.log(0 === false); // false   => 0는 boolean 타입이 아니기 때문에 false
console.log('' == false); // true
console.log('' === false); // false   => ''는 boolean 타입이 아니기 때문에 false
console.log(null == undefined); // true
console.log(null === undefined); // false 

// 8. Conditional operators : if
// if, else if, else
const name = 'coder1';
if(name === 'eunhyung') {
    console.log('welcome, eunhyung!');
} else if (name === 'coder') {
    console.log('you are amazing coder');
} else {
    console.log('unknown')
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'eunhyung' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multuple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you!');
        break;
    default :
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while ( i > 0) {
    console.log(`while : ${i}`);
    i--;
} 

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i -2) {
    // inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loops
for ( let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <= 10; i ++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`2의 배수 : ${i}`)
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (i = 0; i <= 10 ; i++) {
    if (i > 8) {
        break
    }
    console.log(`${i}`)
}