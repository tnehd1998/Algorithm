const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(+testCase, input);

function solution(T, array) {
  for (let i = 0; i < T; i++) {
    let flag = true;
    let [V, E] = array.shift();
    let visited = Array(V + 1).fill(false);
    let graph = Array.from(Array(V + 1), () => Array(0));
    for (let i = 0; i < E; i++) {
      const [a, b] = array.shift();
      graph[a].push(b);
      graph[b].push(a);
    }

    function bfs(start) {
      let queue = [];
      queue.push(start);
      while (queue.length) {
        const cur = queue.shift();
        for (let i = 0; i < graph[cur].length; i++) {
          const next = graph[cur][i];
          if (!visited[next]) {
            if (visited[cur] === 1) {
              visited[next] = 2;
            } else {
              visited[next] = 1;
            }
            queue.push(next);
          } else if (visited[cur] === visited[next]) {
            return;
          }
        }
      }
    }

    for (let i = 1; i <= V; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        bfs(i);
      }
    }
    for (let i = 1; i <= V; i++) {
      for (let j = 0; j < graph[i].length; j++) {
        if (visited[i] === visited[graph[i][j]]) {
          flag = false;
          break;
        }
      }
      if (!flag) break;
    }
    console.log(flag ? "YES" : "NO");
  }
}
