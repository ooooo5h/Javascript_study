let boy = {
    name : "mike",
    showName : function () {
      console.log(boy.name)
    }
};
  
let man = boy;
man.name = "tom";
  
console.log(boy.name)   
// 예상했던 결과는 boy가 man에 담긴 거니까 man의 이름을 tom으로 바꿔도 boy의 이름은 mike로 출력될 줄 알았다.
// 하지만 출력 결과는 boy의 이름도 역시 tom으로 변경이 되었다.

// answer
// 엘리의 유튜브를 보고 깨달았음. 자바스크립트의 얕은 복사가 일어난다.
// boy와 man은 다른 ref값을 갖기만, 그 ref들이 가르키는 값은 똑같음.
// 그래서 man의 name을 tom으로 변경해버리면, 같은 값을 가리키고 있던 boy의 name도 당연히 tom으로 변경이 일어난다.