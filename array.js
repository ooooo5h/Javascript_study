'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['단감', '참외'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);  // 제일 마지막 인덱스값 가져오기 

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach 배열안의 밸류들을 리턴할 수 있다!
fruits.forEach(function( fruit, index, array) {
    console.log(fruit, index, array)
})

// 이름없는 함수는 화살표 함수로바꾸고, Index와 array는 현재 필요없으니 생략하면 코드가 아래와 같이 간결해진다!
fruits.forEach((fruit) => console.log(fruit))