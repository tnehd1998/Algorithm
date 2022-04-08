// 생각한 풀이 방법
// 1. 현재 값이 짝수이면 2로 나누고, 홀수이면 1을 뺀후 answer++를 한다.
// 2. n이 0이 될때까지 반복한다.

function solution(n) {
  let answer = 0;

  while (n !== 0) {
    // n이 0이 될때까지 반복
    if (n % 2 === 0) {
      // 현재 값이 짝수이면 2로 나누고
      n /= 2;
    } else {
      n -= 1; // 홀수이면 1을 뺀후 answer++를 한다
      answer++;
    }
  }

  return answer;
}

solution(5);
solution(6);
solution(5000);
