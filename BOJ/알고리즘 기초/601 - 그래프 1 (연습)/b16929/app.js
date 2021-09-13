const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
let [N, M] = testCase.split(" ").map((item) => +item);
for (let i = 0; i < N; i++) {
  input[i] = input[i].split("");
}

solution(N, M, input);

function solution(N, M, input) {
  const check = Array.from({ length: N }, () => Array(M).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let flag = false;

  function dfs(x, y, cnt) {
    if (flag) return;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx <= -1 || ny <= -1 || nx >= N || ny >= M) continue;
      if (input[nx][ny] !== input[start.i][start.j]) continue;
      if (!check[nx][ny]) {
        check[nx][ny] = true;
        dfs(nx, ny, cnt + 1);
        check[nx][ny] = false;
        continue;
      } else if (cnt >= 4 && nx === start.i && ny === start.j) {
        flag = true;
        return;
      }
    }
  }

  let start;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      start = { i, j };
      check[i][j] = true;
      dfs(i, j, 1);
      check[i][j] = false;
      if (flag) break;
    }
  }
  console.log(flag ? "Yes" : "No");
}
