// 생각한 풀이 방법 (1차 시도 -> 시간초과)
// 1. Recursion을 활용해 해당 값을 구한다.

// function solution(n) {
//   function fibonacci(num) {
//     if (num === 1) {
//       return 1;
//     }
//     if (num === 2) {
//       return 2;
//     }
//     return fibonacci(num - 2) + fibonacci(num - 1);
//   }

//   return fibonacci(n);
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. Recursion을 사용하지 않고 DP로 변환하여 해당 값을 구한다

function solution(n) {
  let answer = Array(n).fill(0);
  answer[1] = 1;
  answer[2] = 2;
  for (let i = 3; i <= n; i++) {
    let current = answer[i - 2] + answer[i - 1];
    answer[i] = current % 1000000007;
  }

  return answer[n];
}

console.log(solution(4));
