// 생각한 풀이 방법
// 1. dp를 활용하여 피보니치로 구한다.

function solution(n) {
  const answer = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    answer[i] = (answer[i - 2] + answer[i - 1]) % 1234567; // dp를 활용
  }

  return answer[n];
}

console.log(solution(4));
console.log(solution(3));
