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