'use strict';  

let globalName = 'global name';  // global : 항상 메모리에 탑재되어있음

{
    let name = 'eunhyung';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName)
}

console.log(name);   // 지역변수 name은 {}외부에서 접근이 불가능
console.log(globalName);

// constants : 변하지 않는 수! immutable data type 
// - security, thread safety, reduce human mistakes

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

const infinity = 1 / 0 ;   // Infinity
console.log(infinity);

const negativeInfinity = -1 / 0 ;   // -Infinity
console.log(negativeInfinity);

const nAn = 'not a number' / 2;    // 숫자가 아닌 수를 2로 나눔 => NaN
console.log(nAn);