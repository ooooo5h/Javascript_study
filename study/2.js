let boy = {
    name : "mike",
    showName : function () {
      console.log(this.name)
    }
  };
  
  let man = boy;
  boy = null;
  
  man.showName();  
  // 예상했던 결과는 boy는 사라졌어도, boy의 분신을 만들어 man에 넣어두었기때문에 mike가 출력될 줄알았는데.. 
  // Uncaught TypeError: Cannot read properties of null (reading 'name') 라고 뜬다. 왜지??



  man.showName();  
  // 메소드의 this는 해당 객체를 가르키기 때문에, boy를 this로 바꾸면 제대로 동작한다. 