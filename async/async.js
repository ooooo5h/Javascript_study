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