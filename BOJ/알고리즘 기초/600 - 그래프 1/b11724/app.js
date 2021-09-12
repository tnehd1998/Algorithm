const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(input[0][0], input[0][1], input.splice(1));

function solution(N, M, array) {
  let visited = Array(N + 1).fill(false);
  let adjArr = Array.from(Array(N + 1), () => Array(0));
  for (let i = 0; i < M; i++) {
    const [a, b] = array[i];
    adjArr[a].push(b);
    adjArr[b].push(a);
  }

  function dfs(start) {
    visited[start] = true;
    for (let i = 0; i < adjArr[start].length; i++) {
      const next = adjArr[start][i];
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }
  console.log(count);
}
