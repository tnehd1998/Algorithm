// 생각한 풀이 방법
// 1. 3부분으로 나눠 해당 위치의 값을 저장한다.
// 1-1. 위에서 아래로 내려가는 대각선
// 1-2. 왼쪽에서 오른쪽으로 이동
// 1-3. 아래에서 위로 내려가는 대각선
// 2. 해당 작업을 n의 값이 유효할 때까지 반복한다.

function solution(n) {
  let answer = [];
  let count = 0;
  let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let currentX = -1;
  let currentY = 0;
  while (n > 0) {
    // n의 값이 유효할 때까지 반복
    for (let i = 0; i < n; i++) {
      // 위에서 아래로 내려가는 대각선
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      // 왼쪽에서 오른쪽으로 이동
      currentY++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      // 아래에서 위로 내려가는 대각선
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3;
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}

solution(4);
solution(5);
solution(6);
