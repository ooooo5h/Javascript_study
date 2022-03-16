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