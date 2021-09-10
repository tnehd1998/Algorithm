const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input[0].split(" ").map((item) => +item);
let array = input[1]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);

solution(testCase[0], testCase[1], array);

function solution(N, M, array) {
  let visited = Array(N);
  let output = [];
  let result = [];
  function dfs(cnt) {
    if (cnt === M) {
      result.push(`${output.join(" ")}`);
      return;
    }
    for (let i = 0; i < N; i++) {
      visited[i] = true;
      output.push(array[i]);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  result = new Set([...result]);
  result = [...result];
  console.log(result.join("\n"));
}
