'use strict';

// JavaScript is synchronus.   => 정해진 순서에 맞게 코드가 실행되는 것
// Execute the code block in order after hoisting.
// hoisting : var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);  // 1000 = 1초     비동기적인 시스템 방식.
console.log('3');

// Synchronous callback 동기
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기 => 나중에 일어남
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);