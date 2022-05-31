// Q1. make a string out of an array
// 배열을 문자열로 변환하기
{
    // 내가 푼 풀이 => toString()사용 
    // 배열을 표현하는 문자열을 리턴한다. 
    const fruits = ['apple', 'banana', 'orange'];
    const string_fruits = fruits.toString();
    console.log(string_fruits);

    // 엘리 풀이 => join사용
    // join안에 구분자(separator)를 넣지 않으면 default는 ','이다.
    const result = fruits.join();
    console.log(result);
}

// Q2. make an array out of a string
// 문자열을 배열로 만들기 => split()
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',')
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 배열 순서 거꾸로 => reverse()은 배열 자체를 변화시킨다!
{
    const array = [1, 2, 3, 4, 5];
    array.reverse()
    console.log(array)
}

// Q4. make new array without the first two elements
// 1,2는 없는 3,4,5의 새 배열을 만들어라 => splice()는 배열 자체에서 삭제한다.
{
    console.clear()
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result);   
    console.log(array);     // 문제는 새 배열을 리턴해야하니까 정답이 안된다.

    // => slice()는 새 배열을 리턴한다. 하지만 마지막값의 직전까지니까 주의하기
    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2, 5);
    console.log(result2);
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
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 배열안의 요소들을 함수를 이용해 다른 방식으로 리턴 => map!!
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// 배열 중 일치하는 값이 하나라도 있는가 => some사용 / 모든 값이 일치하나는 every()사용
{
    console.clear()
    const result = students.some((student)=> student.score < 50);
    console.log(result);
}

// Q9. compute students' average score
// 리턴하는 값이 순차적으로 prev로 전달된다. 
{
    console.clear()
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map(student => student.score)
        .sort((a,b) => a-b)
        .join();
    
    console.log(result)
}