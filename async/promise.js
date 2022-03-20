'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfuilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...')
    setTimeout(()=> {
        resolve('eunhyung');
        // reject(new Error('no network'));
    }, 2000);
})

// 2. Consumers : then, catch, finally
promise
    .then((value) => {    // promise가 정상적으로 잘 실행이  되어서 마지막에 최종적으로 Resolve라는 함수에 전달이 되고, 전달한 값이 then의 value로 전달이 된다. 
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=> {console.log('finally')
    }); // 무조건 마지막에 실행되는 아이


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)    // then은 값을 전달할 수도 있고 또 다른 비동기인 promise를 전달할 수 있음 2
.then(num => num * 3)    // 6
.then(num => {  // 6
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num-1), 1000);  // 5
    });
})
.then(num => console.log(num));  //5 

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve('닭'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => (`${hen} => 달걀`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));     아래와 같이 코드를 줄일 수 있음
getHen() //
.then(getEgg)
.then(cook)
.then(console.log);    
