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