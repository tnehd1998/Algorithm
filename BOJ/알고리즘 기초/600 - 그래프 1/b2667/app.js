const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("").map((item) => +item);
}

solution(+testCase, input);

function solution(T, graph) {
  let home = 0;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];
  let cnt = [];

  function rangeCheck(i, j) {
    if (i >= 0 && i < T && j >= 0 && j < T) {
      return true;
    } else return false;
  }

  function dfs(i, j) {
    if (rangeCheck(i, j) && graph[i][j] === 1) {
      graph[i][j] = 0;
      home += 1;
      for (let k = 0; k < dx.length; k++) {
        dfs(i + dx[k], j + dy[k]);
      }
    }
  }

  for (let i = 0; i < T; i++) {
    for (let j = 0; j < T; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        cnt.push(home);
        home = 0;
      }
    }
  }

  console.log(cnt.length);
  console.log(cnt.sort((a, b) => a - b).join("\n"));
}
