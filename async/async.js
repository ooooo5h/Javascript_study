// async & await
// clear style of using promise :)

// 1. async => 함수 앞에 async를 쓰면 알아서 편하게 promise로 바꿔준다.
async function fetchUser() {
    // do network request in 10 secs....
    return 'hello';
}

const user = fetchUser();
console.log(user);

// 2. await 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(3000);
    return '바나나';
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log)

// 3. userful promise apis  
// 병렬로 처리하기
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log);

// 가장 먼저 끝나는 값만 가져오기
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()])
}

pickOnlyOne().then(console.log)