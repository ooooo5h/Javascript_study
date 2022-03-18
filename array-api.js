// Q1. make a string out of an array
// 문제 : 배열에서 꺼내서 문자열로 만들어라
{
    const fruits = ['apple', 'banana', 'orange'];

    // fruits.forEach(fruit => {
    //     console.log(fruit)
    // }) 

    const result = fruits.join(', and')    // 괄호안에는 구분자를 넣어주면 됨
    console.log(result);
}

// Q2. make an array out of a string
// 아 어렵다 이거 fruits는 array가 아닌데..!?
// 주어진 스트링을 배열로 전환하라는 문제였다.
{
const fruits = '🍎, 🥝, 🍌, 🍒';

// fruits = new Array(fruits)
// console.log(fruits)
const result = fruits.split(',')  // 구분자는 꼭 넣어주는 게 좋다! 어떤걸로 나눌건지
console.log(result);

const result2 = fruits.split()
console.log(result2);

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
// array.sort().reverse()     sort는 왜했니 할 필요가 없는데
// console.log(array)

const result = array.reverse();
console.log(result);

console.log(array);     // reverse는 원래의 데이터도 변형시킨다는 점 유의!
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];

// const result = array.splice(0, 2);
// console.log(result);     // splice는 배열 자체를 수정함으로 정답 아님.

const result2 = array.slice(2, 5);  // slice는 마지막 숫자는 배제하니까 5까지로 해야 끝나지 나옴.
console.log(result2);
console.log(array)    // 원래 array는 변화 없음.
}


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
    const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
    ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find(student => student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map(student => student.score);
      console.log(result)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      const result = students.some((student) => student.score < 50);
      console.log(result);

      const result2 = !students.every((student) => student.score >= 50);
      console.log(result2);
  }
  
  // Q9. compute students' average score
  {
      console.clear()
      const result = students.reduce((prev, curr) =>  prev + curr.score, 0);
      console.log(result / students.length);
      
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }