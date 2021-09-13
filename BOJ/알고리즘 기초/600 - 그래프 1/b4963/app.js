const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

solution(input);

function solution(input) {
  while (input.length) {
    let graph = [];
    let current = input.shift();
    let [w, h] = current.split(" ").map((item) => +item);
    for (let i = 0; i < h; i++) {
      let line = input.shift();
      line = line.split(" ").map((item) => +item);
      graph.push(line);
    }
    let home = 0;
    let dx = [1, -1, 0, 0, 1, 1, -1, -1];
    let dy = [0, 0, 1, -1, 1, -1, 1, -1];
    let cnt = [];

    function rangeCheck(i, j) {
      if (i >= 0 && i < h && j >= 0 && j < w) {
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

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (graph[i][j] === 1) {
          dfs(i, j);
          cnt.push(home);
          home = 0;
        }
      }
    }
    console.log(cnt.length);
  }
}
