'use strict';

// JavaScript is synchronus.   => 정해진 순서에 맞게 코드가 실행되는 것
// Execute the code block in order after hoisting.
// hoisting : var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);  // 1000 = 1초     비동기적인 시스템 방식.
console.log('3');

// Synchronous callback 동기
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback 비동기 => 나중에 일어남
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'eunhyung' && password === 'qwer') ||
                (id === 'coder' && password === 'qwer')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'eunhyung') {
                onSuccess({name : 'eh', role : 'admin'});
            } else {
                onError( new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} roll`
                );
            },
            error => {
                console.log('error');
            }
        );
    }, 
    error => {
        console.log(error);
    }
);
// 가독성이 떨어진다는 단점, 디버깅도 상당히 어렵다. 