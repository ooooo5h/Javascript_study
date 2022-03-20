// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true); 
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {    // 함수는 Json에 포함되지 않는다.
        console.log(`${this.name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);    // 원하는 Property만 정해서 obj로 변환할 수 있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'eunhyung' : value;
})

console.log(json)

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;    // 콜백함수를 사용하면, 49번 코드줄처럼 getdate를 할 수 있음!
});
console.log(obj);
rabbit.jump();
// obj.jump();    // 해당 기능이 없음. 점프기능이 있는 객체를 obj로 변환했음(함수는 obj로 변환이 안됨), 그 아이를 또다시 전환했으니 당연히 Jump기능은 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate())    // obj의 birthdate는 string으로 들어가있기 때문.