function solution(a, b) {
  let answer = 0;
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
