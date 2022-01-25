// 생각한 풀이 방법 (1차 시도 -> 효율성 실패)
// 1. 모든 경로 외곽에 벽을 쳐서 밖으로 나가는 경우를 방지함
// 2. DFS를 활용해 visited한 위치인지 판단함, 이미 방문한적이 있으면 해당 경우는 세지않음
// 3. 도착 지점에 도착하면 answer에 값을 추가함
// 4. answer에 값이 존재하지 않으면 경로가 없다는 의미로 -1을 반환함

function solution(maps) {
  let answer = [];
  let visited = Array.from(Array(maps.length + 2), () =>
    Array(maps[0].length + 2).fill(true)
  ); // 모든 경로 외곽에 벽을 쳐서 밖으로 나가는 경우를 방지함
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j]) {
        visited[i + 1][j + 1] = false;
      }
    }
  }

  function dfs(x, y, count) {
    let queue = [[x, y, count]];
    while (queue.length) {
      let [x, y, count] = queue.shift();
      visited[x][y] = true;
      count++;
      if (x === maps.length && y === maps[0].length) {
        return answer.push(count); // 도착 지점에 도착하면 answer에 값을 추가함
      }

      // DFS를 활용해 visited한 위치인지 판단함, 이미 방문한적이 있으면 해당 경우는 세지않음
      if (!visited[x + 1][y]) {
        queue.push([x + 1, y, count]);
      }
      if (!visited[x - 1][y]) {
        queue.push([x - 1, y, count]);
      }
      if (!visited[x][y + 1]) {
        queue.push([x, y + 1, count]);
      }
      if (!visited[x][y - 1]) {
        queue.push([x, y - 1, count]);
      }
    }
  }

  dfs(1, 1, 0);

  return answer.length ? Math.min(answer) : -1; // answer에 값이 존재하지 않으면 경로가 없다는 의미로 -1을 반환함
}

// 잘못 생각했던 내용
// 1. 이미 특정 경우가 해당 경로를 지나간 적이 있다면 더 오래 걸리는 경우라 판단해 배제함

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 모든 경로 외곽에 벽을 쳐서 밖으로 나가는 경우를 방지함
// 2. 경로를 이동하면서 이전 경로까지의 값에 1을 더한값을 다음 위치의 값으로 지정함
// 3. BFS를 활용해 모든 경로를 탐색한 후 도착 지점에 도착하면 해당 값을 answer에 push함
// 4. answer에 값이 존재하지 않는 경우 -1을 반환함

function solution(maps) {
  let answer = [];
  let visited = Array.from(Array(maps.length + 2), () =>
    Array(maps[0].length + 2).fill(true)
  ); // 모든 경로 외곽에 벽을 쳐서 밖으로 나가는 경우를 방지함
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j]) {
        visited[i + 1][j + 1] = false;
      }
    }
  }

  visited[1][1] = 1;

  function bfs(x, y) {
    let queue = [[x, y]];
    while (queue.length) {
      // BFS를 활용해 모든 경로를 탐색
      let [x, y] = queue.shift();
      if (x === maps.length && y === maps[0].length) {
        answer.push(visited[x][y]); // 도착 지점에 도착하면 해당 값을 answer에 push함
      }
      if (!visited[x + 1][y]) {
        visited[x + 1][y] = visited[x][y] + 1; // 경로를 이동하면서 이전 경로까지의 값에 1을 더한값을 다음 위치의 값으로 지정함
        queue.push([x + 1, y]);
      }
      if (!visited[x - 1][y]) {
        visited[x - 1][y] = visited[x][y] + 1; // 경로를 이동하면서 이전 경로까지의 값에 1을 더한값을 다음 위치의 값으로 지정함
        queue.push([x - 1, y]);
      }
      if (!visited[x][y + 1]) {
        visited[x][y + 1] = visited[x][y] + 1; // 경로를 이동하면서 이전 경로까지의 값에 1을 더한값을 다음 위치의 값으로 지정함
        queue.push([x, y + 1]);
      }
      if (!visited[x][y - 1]) {
        visited[x][y - 1] = visited[x][y] + 1; // 경로를 이동하면서 이전 경로까지의 값에 1을 더한값을 다음 위치의 값으로 지정함
        queue.push([x, y - 1]);
      }
    }
  }

  bfs(1, 1);

  return answer.length ? Math.min(answer) : -1; // answer에 값이 존재하지 않는 경우 -1을 반환함
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
