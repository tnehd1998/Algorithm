// 생각한 풀이 방법
// 1. DP를 활용해 다음 숫자를 구한다.

function solution(n) {
  const answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[n];
}

solution(3);
