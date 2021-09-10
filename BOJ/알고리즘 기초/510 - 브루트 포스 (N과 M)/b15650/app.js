const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(N, M) {
  let visited = Array(N);
  let output = [];
  let result = "";
  function dfs(idx, cnt) {
    if (cnt === M) {
      result += `${output.join(" ")}\n`;
      return;
    }
    for (let i = idx; i < N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i + 1);
      dfs(i, cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0, 0);
  console.log(result.trim());
}
