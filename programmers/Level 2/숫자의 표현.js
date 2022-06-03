// 생각한 풀이 방법
// 1. 처음부터 탐색을 해 연속되는 수가 n과 같다면 answer를 증가시킨다.
// 2. 누적 값이 n보다 커지는 경우는 무시한다.

function solution(n) {
  let answer = 1;

  for (let i = 1; i <= Math.floor(n / 2) + 1; i++) {
    // 처음부터 탐색
    let total = 0;
    for (let j = i; j <= n; j++) {
      if (total === n) {
        // 연속되는 수가 n과 같다
        answer++; // answer를 증가
        break;
      }
      if (total > n) {
        // 누적 값이 n보다 커지는 경우
        break;
      }
      total += j;
    }
  }

  return answer;
}

solution(15);
