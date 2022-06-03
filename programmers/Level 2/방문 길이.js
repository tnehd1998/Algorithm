// 생각한 풀이 방법
// 1. 지나가는 경로에 따라 해당 경로를 추가한다.
// 2. (0, 0) -> (0, 1)로 가는 경우와 (0, 1) -> (0, 0)으로 가는 경우를 모두 추가한다.
// 3. 마지막에 중복된 경로를 제거한다.

function solution(dirs) {
  let answer = new Set();

  let possibleMove = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] };

  let start = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    // 지나가는 경로에 따라 해당 경로를 추가
    let currentX = start[0] + possibleMove[dirs[i]][0];
    let currentY = start[1] + possibleMove[dirs[i]][1];

    if (currentX > 5 || currentX < -5 || currentY > 5 || currentY < -5) {
      continue;
    }

    answer.add("" + start[0] + start[1] + currentX + currentY); // (0, 0) -> (0, 1)로 가는 경우
    answer.add("" + currentX + currentY + start[0] + start[1]); // (0, 1) -> (0, 0)으로 가는 경우

    start = [currentX, currentY];
  }

  return answer.size / 2; // 중복된 경로를 제거
}

solution("ULURRDLLU");
solution("LULLLLLLU");
