// 생각한 풀이 방법
// 1. BFS를 활용하여 모든 노드를 탐색한다.
// 2. 시작 노드가 1로 정해져 있기 때문에 처음 시작하는 탐색 노드를 1로 가정하고 BFS를 실행한다.
// 3. 현재 노드의 값을 포함하는 edge가 존재하면, 현재 노드와 연결되어 있는 다른 노드가 visited되었는지 확인한다.
// 4. visited된적이 없다면 현재 노드 값에 +1한 값을 저장한다.
// 5. 모든 노드를 탐색 후, 가장 먼 노드 개수를 반환한다.

function solution(n, edge) {
  function bfs(start, end, edges) {
    let visited = Array(n + 1).fill(false);
    let value = Array(n + 1).fill(0);
    let queue = [start]; // 시작 노드가 1로 정해져 있기 때문에 처음 시작하는 탐색 노드를 1로 가정하고 BFS를 실행한다.

    visited[start] = true;

    while (queue.length) {
      let current = queue.shift();
      let currentValue = value[current] + 1;
      edges.forEach((edge) => {
        if (edge[0] === current && !visited[edge[1]]) {
          // 현재 노드의 값을 포함하는 edge가 존재하면, 현재 노드와 연결되어 있는 다른 노드가 visited되었는지 확인한다.
          queue.push(edge[1]);
          visited[edge[1]] = true;
          value[edge[1]] = currentValue; // visited된적이 없다면 현재 노드 값에 +1한 값을 저장한다.
        }
        if (edge[1] === current && !visited[edge[0]]) {
          // 현재 노드의 값을 포함하는 edge가 존재하면, 현재 노드와 연결되어 있는 다른 노드가 visited되었는지 확인한다.
          queue.push(edge[0]);
          visited[edge[0]] = true;
          value[edge[0]] = currentValue; // visited된적이 없다면 현재 노드 값에 +1한 값을 저장한다.
        }
      });
    }

    let maxValue = Math.max(...value);

    return value.filter((current) => current === maxValue).length; // 모든 노드를 탐색 후, 가장 먼 노드 개수를 반환한다.
  }

  return bfs(1, n, edge);
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
console.log(
  solution(11, [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 5],
    [3, 6],
    [4, 8],
    [4, 9],
    [5, 9],
    [5, 10],
    [6, 10],
    [6, 11],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(solution(2, [[1, 2]]));
console.log(
  solution(5, [
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 4],
  ])
);
console.log(
  solution(4, [
    [1, 4],
    [1, 3],
    [2, 3],
    [2, 1],
  ])
);
console.log(
  solution(4, [
    [3, 4],
    [1, 3],
    [2, 3],
    [2, 1],
  ])
);
console.log(
  solution(4, [
    [4, 3],
    [1, 3],
    [2, 3],
  ])
);
