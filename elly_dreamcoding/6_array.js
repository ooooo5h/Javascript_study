'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);   // 마지막 요소

// 3. Looping over an array
// print all 
// a. for
for (let i =0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// forEach는 콜백함수를 받아온다!?
console.clear()
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push:add an item to the end
fruits.push('수박', '복숭아');
console.log(fruits)

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item from the beginning
fruits.unshift('포도');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// note !shift, unshift are slower than pop, push
// 전체 배열이 움직여야하는 작업들은 작업 속도가 느리다!!

// splice : remove an item by index position
// 꼬아서 잇다라는 뜻의 splice
fruits.push('배', '딸기');
console.log(fruits);
// fruits.splice(1);    // 몇개 지울지 말하면 인덱스 1뒤의 모든 데이터를 지워버린다.
fruits.splice(1,1);
console.log(fruits);   // 인덱스 1바나나부터 1개를 지웠으니 바나나만 삭제됨

fruits.splice(1, 1, '낑깡', '자몽');
console.log(fruits);   // 인덱스1부터 1개를 지우고 낑깡, 자몽을 그자리에 넣음

// concat : combine two arrays
const fruits2 = ['과자', '사이다'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// infdexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('자몽'));
console.log(fruits.indexOf('수박'));   // 없으면 -1을 리턴

// includes
console.log(fruits.includes('사과'));  // 있으면 true
console.log(fruits.includes('감'));   // 없는 값이면 false

// lastIndexOf
console.clear();
fruits.push('사과');   // 같은 값이 2개일때 인덱스는?
console.log(fruits);
console.log(fruits.indexOf('사과'))   // 앞에서 가까운 값을 리턴.
console.log(fruits.lastIndexOf('사과'));  // 뒤에서 가까운 값 리턴