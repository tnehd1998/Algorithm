const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(N, M) {
  let visited = Array(N);
  let output = [];
  let result = "";
  function dfs(cnt) {
    if (cnt === M) {
      result += `${output.join(" ")}\n`;
      return;
    }
    for (let i = 0; i < N; i++) {
      visited[i] = true;
      output.push(i + 1);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  console.log(result.trim());
}
