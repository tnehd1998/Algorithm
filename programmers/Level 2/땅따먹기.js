// 생각한 풀이 방법
// 1. 다음 열을 넘어갈 때, 가능한 최대의 경우를 다음 열에 더하며 연산을 이어간다.
// 2. 마지막 열에서 최대 값을 반환한다.

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    // 다음 열을 넘어갈 때
    let currentValue = land[i - 1];
    for (let j = 0; j < 4; j++) {
      let filterValue = currentValue.filter((_, index) => index !== j);
      let maxValue = Math.max(...filterValue); // 가능한 최대의 경우
      land[i][j] += maxValue; // 다음 열에 더하며 연산
    }
  }

  return Math.max(...land[land.length - 1]); // 마지막 열에서 최대 값을 반환
}

solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);
