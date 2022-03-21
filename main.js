// false : 0, -0, '', null, undefined
// true : -1, 't', 'false'

let num ; // 값을 할당하지 않으면 Undefined가 담김
if (num) {
    console.log('true!')
} else {
    console.log('false!')
}

num && console.log(num)   // num이 false이기 때문에 뒤에 문장 자체가 실행이 안됨