// Function
// - fundamental building block in the program
// - subprogram can be used multipe times
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body.. return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('hello');
}
printHello();

function log(message) {
    console.log(message);
}

log('이렇게 함수를 사용합니다.')
log(1234);

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name :'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from='unknown') {   // ='기본값'으로 설정 가능
    console.log(`${message} by ${from}`);
}

showMessage('hi')  // 안정하면 undefined가 출력된다.

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 간단하게 배열의 값을 출력하는 방법1
    for (const arg of args) {
        console.log(arg);
    }

    // 간단하게 배열의 값을 출력하는 방법2
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 안에서는 밖을 볼 수 있지만, 밖에서 안을 볼 순 없다.
let globalMessage = '안녕 여기는 함수 밖';   // global variable

function printMessage() {
    let message = '안녕하세요 여기는 함수 내부'
    console.log(message);  // local variable
    console.log(globalMessage);  // 아무 문제 없다.
}

printMessage()
// console.log(message);   // 이거는 에러 발생

// 6. Return a value
function sum(a,b) {
    return a+b;
}

const result = sum(1,2);   // 3
console.log(`sum : ${sum(1,2)}`);

// 7. Early return, early exit
// bad case
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good case
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() {  // 이름이 없는 함수 => anonymous function
    console.log('print');
};

print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 4));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('YES');
}

// named function
// better debugging in debuggers' stack traces
// recursions => 함수 내부에서 다른 함수를 부를 때! 재귀
const printNo = function print() {
    console.log('NO');
}

randomQuiz('love you', printYes, printNo);
randomQuiz('싫어해', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint')
}

const arrowSimplePrint = () => console.log('simplePrint')

const add = (a,b) => a+b;
const addFunction = function (a,b) {
    return a+b;
}

// IIFE : Immediately Invoked Function Expression
// (function hello() {
//     console.log('IIFE');
// })();

// hello() 함수 호출을 한번에 하는 방법 ! 

// Fun quiz time 
// function calculate (command, a, b)
// command : (add, substract, divide, multiply, remainder)


// 내가 짠 코드
function calculate(command, a, b) {
    if (command === 'add') {
        return a + b
    } else if (command === 'substract') {
        return a - b
    } else if (command === 'divide') {
        return a / b
    } else if ( command === 'multiply') {
        return a * b
    } else if (command === 'remainder') {
        return a % b
    } else {
        return '잘못된 연산자'
    }
}

const r = calculate('substract', 5, 2)
console.log(r)

// 강의가 짠 코드
// 정해진 데이터를 처리하는 경우에는 switch를 사용하는 게 더좋다!
function calculate2(command, a, b) {
    switch (command) {
        case 'add' :
            return a+b;
        case 'substract' :
            return a-b;
        case "divide" :
            return a/b;
        case "multiply":
            return a*b;
        case "remainder":
            return a%b;
        default :
        throw Error('unknown command');
    }
}

console.log(calculate2('add', 7,2))