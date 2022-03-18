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

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('복숭아', '딸기');
console.log(fruits);

// pop : remove an item from the end
fruits.pop()
console.log(fruits);
 
// unshift : add an item to the beginning
fruits.unshift('포도');
console.log(fruits);

// shift : remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits)

// note! shift , unshift are slower than pop, push => 기존의 데이터들을 움직일 필요는 없기 때문에 빠름.
// 하지만 앞에서 데이터를 조작하려면, 두세번째 데이터들을 하나하나 옮겨두는 작업이 이뤄짐.
// 배열의 길이가 길어질수록 shift 움직이는 작업들은 느리다!

// splice : remove an item by index position
fruits.push('포도', '귤', '사과');
console.log(fruits);
// fruits.splice(1);
// console.log(fruits);  // splice는 몇개를 삭제할지 말 안하면, 다 지워버리니까 몇개를 지울 지 말해줘야함!!

fruits.splice(2, 1);
console.log(fruits);

fruits.splice(1, 1, '수박', '토마토') // 1번쨰 인덱스에서부터 시작해서 1개를 지우고 그 자리에 수박과 토마토를 넣어라
console.log(fruits);

// combine two arrays
const fruits2 = ['레몬', '배'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits)