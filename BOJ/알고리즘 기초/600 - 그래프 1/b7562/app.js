const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();

solution(+testCase, input);

function solution(T, input) {
  let result = "";
  function bfs(knight, target, I) {
    let queue = [];
    queue.push(knight);
    let visited = Array.from({ length: I }, () => Array(I).fill(0));
    visited[knight[0]][knight[1]] = 1;
    const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];
    while (queue.length) {
      const [x, y] = queue.shift();
      if (x === target[0] && y === target[1]) {
        result += `${visited[x][y] - 1}\n`;
        break;
      }
      for (let i = 0; i < 8; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= I || ny >= I) continue;
        if (!visited[nx][ny]) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  for (let i = 0; i < T; i++) {
    let L = +input.shift();
    let knight = input
      .shift()
      .split(" ")
      .map((item) => +item);
    let target = input
      .shift()
      .split(" ")
      .map((item) => +item);
    bfs(knight, target, L);
    console.log(result.trim());
    result = "";
  }
}
