'use strict';

// 함수 선언
function doSomething(add) {
    console.log(add);
}

function add(a,b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add);

