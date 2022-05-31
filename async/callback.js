'use strict';

// JavaScript is synchronous.
// Execute the code block by order after hoisting.
// hoisting : var , function declaration.

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// synchronous callback 동기적 => 연달아 일어난다 콜백
function printImmediately(print) {
    print();
}

printImmediately(()=> console.log('안녕'))

// asynchronous callback 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=>console.log('뿅! 비동기'), 2000);


// callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=>{
            if (user === 'ellie') {
                onSuccess({name : 'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
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
    (user)=>{
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`안녕하세요 ${userWithRole.name} you have a ${userWithRole.role} role`)
            }, 
            (error) => {console.log(error)}
        );
    }, 
    (error) => {console.log(error)}
);