 // async & await
 // clear style of using promise ;)

 // 1. async
 async function fetchUser(){
    // do network request in 10secs...
    return 'eunhyung';
 }

 const user = fetchUser();
 user.then(console.log);
 console.log(user);

 // 2. await
 function delay(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
 }

 async function getApple() {
     await delay(3000);
     return '사과';
 }

 async function getBanana() {   // delay가 끝날때까지 기다려. 기다렸다가 바나나를 리턴하는 코드
     await delay(3000);
     return '바나나';
 }

 async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
 }

 pickFruits().then(console.log);