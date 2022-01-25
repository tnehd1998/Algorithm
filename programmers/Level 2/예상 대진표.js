// 생각한 풀이 방법
// 1. a와 b가 만나는지 확인을 한다
// 2. 만나지 않는다면 해당 조건에 맞게 만날때까지 반복문을 실행한다.

function solution(n, a, b) {
  let answer = 0;
  let match = false;

  while (!match) {
    // 만나지 않는다면 해당 조건에 맞게 만날때까지 반복문을 실행
    if (a > b && a % 2 === 0 && a === b + 1) {
      // a와 b가 만나는지 확인을 한다
      match = true;
    }
    if (a < b && b % 2 === 0 && a === b - 1) {
      // a와 b가 만나는지 확인을 한다
      match = true;
    }
    answer++;
    a = a % 2 > 0 ? (a + 1) / 2 : a / 2;
    b = b % 2 > 0 ? (b + 1) / 2 : b / 2;
  }

  return answer;
}

console.log(solution(8, 4, 7));
console.log(solution(8, 4, 5));
