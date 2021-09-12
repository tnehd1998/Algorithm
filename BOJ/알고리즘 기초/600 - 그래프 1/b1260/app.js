const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
testCase = testCase.split(" ").map((item) => +item);

for (let i = 0; i < testCase[1]; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(testCase[0], testCase[1], testCase[2], input);

function solution(N, M, V, array) {
  let graph = Array.from(Array(N + 1), () => Array(0));
  let visited = Array(N + 1).fill(0);
  let result = [];

  function insertEdge(vFront, vBack) {
    let index;
    for (index = 0; index < graph[vFront].length; index++) {
      if (graph[vFront][index] < vBack) {
        continue;
      }
      if (graph[vFront][index] === vBack) {
        index = null;
      }
      break;
    }
    if (index !== null) {
      graph[vFront].splice(index, 0, vBack);
    }
  }

  function dfs(v) {
    if (visited[v]) {
      return;
    }
    visited[v] = true;
    result.push(v);
    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        dfs(graph[v][i]);
      }
    }
  }

  function bfs(v) {
    let willVisit = [v];
    let start;
    while (willVisit.length !== 0) {
      start = willVisit.shift();
      if (visited[start]) {
        continue;
      }
      visited[start] = true;
      result.push(start);
      for (let i = 0; i < graph[start].length; i++) {
        if (!visited[graph[start][i]]) {
          willVisit.push(graph[start][i]);
        }
      }
    }
  }

  for (let i = 0; i < M; i++) {
    const [a, b] = array[i];
    insertEdge(a, b);
    insertEdge(b, a);
  }

  dfs(V);
  console.log(result.join(" "));

  visited.fill(false);
  result = [];
  bfs(V);
  console.log(result.join(" "));
}
