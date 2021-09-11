const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    let testLength = current.shift();
    let visited = Array(testLength);
    let output = [];
    let result = "";
    function dfs(idx, cnt) {
      if (cnt === 6) {
        result += `${output.join(" ")}\n`;
        return;
      }
      for (let i = idx; i < testLength; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        output.push(current[i]);
        dfs(i, cnt + 1);
        output.pop();
        visited[i] = false;
      }
    }
    dfs(0, 0);
    console.log(result.trim() + "\n");
  }
}
