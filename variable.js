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