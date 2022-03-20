 // async & await
 // clear style of using promise ;)

 // 1. async
 function fetchUser(){
     return new Promise((resolve, reject) => {
         // do network request in 10secs...
         resolve('eunhyung');
     })
 }

 const user = fetchUser();
 user.then(console.log);
 console.log(user);