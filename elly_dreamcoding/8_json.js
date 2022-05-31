// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name :'tori',
    color :'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${this.name} can jump!`)
    }
};

json = JSON.stringify(rabbit);
console.log(json);   // 함수는 제외되고 json이 생성된다.

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);    // 특정값만 json으로 {"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'name' ? 'eunhyung' : value;
})
console.log(json)
 

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(key, value)
    return key === 'birthDate'? new Date(value) : value;   // 세밀하게 통제하려면 콜백함수 사용!! 데이트타입같은 경우!
});
console.log(obj);

rabbit.jump();
// obj.jump();    // 토끼에는 있지만 없다.
// 토끼를 변환할때 함수는 포함되지 않았고, 그걸 다시 오브젝트화하니까 당연히 함수는 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());