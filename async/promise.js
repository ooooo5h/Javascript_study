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
    }, 2000);
})

