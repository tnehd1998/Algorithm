// 생각한 풀이 방법
// 1. BFS를 통해 경로를 탐색한다.
// 2. 상하좌우를 탐색하며 해당 위치가 0이거나, 현재 누적 값인 total보다 클 경우 탐색한다.

function solution(board) {
  let boardSize = board.length;

  const checkValid = (mx, my) =>
    mx >= 0 && my >= 0 && mx < boardSize && my < boardSize;

  let pointX = [-1, 0, 1, 0];
  let pointY = [0, 1, 0, -1];

  function bfs(queue) {
    while (queue.length) {
      let [x, y, direction, total] = queue.shift();
      if (board[x][y] === 0 || board[x][y] >= total) {
        // 해당 위치가 0이거나, 현재 누적 값인 total보다 클 경우 탐색
        board[x][y] = total;

        pointX.forEach((_, index) => {
          // 상하좌우를 탐색
          if (Math.abs(index - direction) !== 2) {
            const value = total + (direction === index ? 100 : 600);
            if (checkValid(x + pointX[index], y + pointY[index])) {
              queue.push([x + pointX[index], y + pointY[index], index, value]);
            }
          }
        });
      }
    }
  }

  bfs([
    [0, 1, 1, 100],
    [1, 0, 2, 100],
  ]); // BFS를 통해 경로를 탐색

  return board[boardSize - 1][boardSize - 1];
}

solution([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);
solution([
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
]);
solution([
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
]);
solution([
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
]);
solution([
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 0],
]);
