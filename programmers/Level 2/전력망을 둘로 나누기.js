// 생각한 풀이 방법
// 1. wire를 순서대로 뺴서 완전 탐색을 한다.
// 2. 처음 실행하는 경우는 시작을 두번째 wire로 하고 아닌 경우는 시작을 첫번째 wire로 한다.
// 3. 해당 wire와 연결된 송전탑을 set과 queue에 추가한다.
// 4. 모든 wires를 탐색 후, answer과 해당 갯수를 비교 후 최소값을 answer에 저장한다.

function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let currentIndex = 0;
  for (let i = 0; i < wires.length; i++) {
    let current = wires[i];
    if (current[0] > current[1]) {
      wires[i] = [current[1], current[0]];
    }
  }

  wires = wires.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  while (currentIndex < n - 1) {
    let current;
    let set = new Set();
    let queue = [];
    if (currentIndex === 0) {
      // 처음 실행하는 경우
      current = wires[1]; // 시작을 두번째 wire
      set = new Set([current[0], current[1]]);
      queue = [current[0], current[1]];
    } else {
      // 처음이 아닌 경우
      current = wires[0]; // 시작을 첫번째 wire
      set = new Set([current[0], current[1]]);
      queue = [current[0], current[1]];
    }

    while (queue.length) {
      let currentPoint = queue.shift();
      wires.forEach((wire, index) => {
        // 모든 wires를 탐색
        if (index !== currentIndex) {
          if (wire[0] === currentPoint) {
            // 연결된 송전탑을 set과 queue에 추가
            if (!set.has(wire[1])) {
              set.add(wire[1]);
              queue.push(wire[1]);
            }
          }
          if (wire[1] === currentPoint) {
            // 연결된 송전탑을 set과 queue에 추가
            if (!set.has(wire[0])) {
              set.add(wire[0]);
              queue.push(wire[0]);
            }
          }
        }
      });
    }
    let value = n - set.size;
    let diff = Math.abs(value - set.size);
    answer = Math.min(answer, diff); // answer과 해당 갯수를 비교 후 최소값을 answer에 저장
    currentIndex++;
  }

  return answer;
}

solution(9, [
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [7, 8],
  [7, 9],
]);
solution(6, [
  [1, 4],
  [6, 3],
  [2, 5],
  [5, 1],
  [5, 3],
]);
