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
        // resolve('eunhyung');
        reject(new Error('no network'));
    }, 2000);
})

// 2. Consumers : then, catch, finally
promise
    .then((value) => {    // promise가 정상적으로 잘 실행이 되어서 마지막에 최종적으로 Resolve라는 함수에 전달이 되고, 전달한 값이 then의 value로 전달이 된다. 
    console.log(value);
    })
    .catch(error => {
        console.log(error);
    })

