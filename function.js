//  Function
//  - fundamental building block in the program
//  - subprogram can be used multiple times
//  - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) {body... return;}
// one function === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('은형이가 자바스크립트 공부중');
log(314);

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const eunhyung = {name : 'eunhyung'};
changeName(eunhyung);
console.log(eunhyung)

// 3. Default parameters
function showMessage (message, from) {
    console.log(`${message} by ${from}`);
}

showMessage('은형이 파이팅')    // 두번째 파라미터값이 안주어진 경우, 기본값인 undefined로 대체된다.

function showMessage2 (message, from = '세상 모든 사람들!') {   // 파라미터에 대입할 때, = 으로 기본값을 설정할 수 있음
    console.log(`${message} by ${from}`);
}

showMessage2('은형이 파이팅')  

// 4. Rest parameters 
function printAll(...args) {    // ...args => 파라미터가 배열로 들어온다는 뜻
    for (let i = 0 ; i < args.length; i++) {
        console.log(args[i])
    }

    // 배열 출력방법 2 
    for (const arg of args) {
        console.log(arg);
    }

    // 배열 출력방법 3
    args.forEach((arg) => console.log(arg));
} 

printAll('자바스크립트', '파이팅', '은형이')

// 5. Local scope
let globalMessage = 'global'; // 전역변수

function printMessage() {
    let message  = 'hello';  // 지역변수
    console.log(message);    
    console.log(globalMessage);  // 내부에서는 밖을 볼 수 있다.

    function printAnother() {
        console.log(message);   // 내부에서는 밖을 볼 수 있다.
        let childMessage = "hello";
    }
    // console.log(childMessage);  // 밖에서는 안을 볼 수 없다.
}
printMessage()
// console.log(message);  // 밖에서는 안을 볼 수 없다.

// 6. Return a value
function sum(a,b) {
    return a + b;
}

const result = sum(1,2);
console.log(`sum : ${sum(1,2)}`);

// 7. Early return, early exit 
// bad case
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good case    => 값이 틀린 경우를 먼저 리턴해서 빨리 함수를 끝내는 게 좋은 코드 작성법이다!
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are trated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() {
    // anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));    

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {   // 함수의 파라미터로 함수를 전달.
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function() {
    console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
const simplyMultiply = (a,b) => {
    // do something more
    return a + b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();    // 괄호로 감싸고, 함수호출처럼 괄호()를 해주면 함수가 바로 호출됨 => 최근에는 잘 쓰이진 않는다