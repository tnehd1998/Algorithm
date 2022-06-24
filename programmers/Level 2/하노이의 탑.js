// 생각한 풀이 방법
// 1. 재귀함수를 활용하여 모든 원반을 옮긴다.

function solution(n) {
  let answer = [];

  function hanoi(n, start, end, mid) {
    if (n === 1) {
      return answer.push([start, end]);
    }
    hanoi(n - 1, start, mid, end);
    answer.push([start, end]);
    hanoi(n - 1, mid, end, start);
  }

  hanoi(n, 1, 3, 2);

  return answer;
}
