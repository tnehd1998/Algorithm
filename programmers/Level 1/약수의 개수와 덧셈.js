function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let figureNumber = isEven(i);
    if (figureNumber) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

function isEven(num) {
  let number = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      number++;
    }
  }

  return number % 2 === 0 ? true : false;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
