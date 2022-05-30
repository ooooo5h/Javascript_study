// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(1%1);  // remainder
console.log(1**1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter:${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter:${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 <6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 <2 ;

// ||(or), finds the first truthy value
// => 무거운 연산을 처리하는 함수는 맨 뒤에 위치!
console.log(`or : ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
// => 역시 무거운 연산은 뒤에서 처리하는 게 좋다.
console.log(`and : ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i =0; i < 10; i++) {
        // wasting time
        console.log('😱')
    }

    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 문자열이지만 안에 들어있는 게 5잖아 숫자 5랑 똑같애 연산해줌
console.log(stringFive == numberFive);   //  true
console.log(stringFive != numberFive);  //  false

// === string equality, no type conversion
// 타입까지 신경써줌!. ===를 사용하는 게 좋다. 
console.log(stringFive === numberFive);   // false
console.log(stringFive !== numberFive);   // true

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // true가 아니라 false. 다른 레퍼런스니까!
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false);   // true
console.log(0 === false);  // false
console.log('' == false);  // true
console.log('' === false); // false
console.log(null == undefined);  // true
console.log(null  === undefined);  // false

// 8. Conditional operators : if
// if , else, else if
const yourNAME = ' ';
if (yourNAME === 'ellie') {
    console.log('안녕, ellie!')
} else if (yourNAME === 'coder') {
    console.log('you are amazing coder!')
} else {
    console.log('누구세요?')
}

// 9. Ternary operator : ?
// condition ? value1 : value 2;
console.log(yourNAME === 'ellie'? 'yes':'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-list value check
// use for multipe type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you~!');
        break
    default: 
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 조건문이 맞을 때만 사용하고 싶다면 while문 사용하기
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 블럭 먼저 실행하고 싶으면 do-while을 사용하기
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0)

// for loop, for(begin; condition; step)
for (i=3; i >0; i--) {
    console.log(`for : ${i}`);
}

for (let i =3; i>0; i=i-2) {
    console.log(`inline variable for :${i}`);
}

// nested loops
for (let i =0; i <10; i++){
    for (let j=0; j<10; j++) {
        console.log(`i:${i}, j:${j}`);
    }
}

// break, continue
// break는 루프를 끝내기, continue는 다음루프로 넘어가기
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    continue;
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i =0; i<=10; i++) {
    if (i ==8) {
        console.log(i);
        break
    }
    console.log(i);
} 