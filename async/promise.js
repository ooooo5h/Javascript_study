'use strict';

// promise is a javascript object for asynchronous operations.
// state : pending -> fullfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy word (network, read files)
    console.log('doing something...')
    setTimeout(()=>{
        // resolve('ellie')
        reject(new Error('no network'))
    }, 2000)
})

// 2. Consumers : then, catch, finally를 사용해서 값을 받아온다.
promise
    .then((value)=> {
       console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    }, 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num-1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(()=> reject(new Error(`${hen} => 달걀`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${egg} => 계란후라이`), 1000);
    });

getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal)); 받아온 벨류를 전달해주면 생략이 가능하다.
.then(getEgg)
.catch(error => {     // 위에서 문제가 생기면 아래 코드로 실행하겠다는 뜻.
    return '빵'
})
.then(cook)
.then(console.log)
.catch(console.log);
