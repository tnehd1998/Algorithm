// 생각한 풀이 방법
// 1. A와 B를 서로 반대로 정렬한다.
// 2. A와 B를 각각 곱한 후, answer에 더한다.

function solution(A, B) {
  let answer = 0;

  // A와 B를 서로 반대로 정렬
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i]; //  A와 B를 각각 곱한 후, answer에 더한다
  }

  return answer;
}
