const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(+input[0]);

function solution(num) {
  let visited = Array(num);
  let output = [];
  let result = "";
  function dfs(cnt) {
    if (cnt === num) {
      result += `${output.join(" ")}\n`;
      return;
    }
    for (let i = 0; i < num; i++) {
      if (visited[i]) continue;
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
