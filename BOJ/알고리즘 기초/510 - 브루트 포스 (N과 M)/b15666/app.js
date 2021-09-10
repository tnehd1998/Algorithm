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
  function dfs(idx, cnt) {
    if (cnt === M) {
      result.push(`${output.join(" ")}`);
      return;
    }
    for (let i = idx; i < N; i++) {
      output.push(array[i]);
      dfs(i, cnt + 1);
      output.pop();
    }
  }
  dfs(0, 0);
  result = new Set([...result]);
  result = [...result];
  console.log(result.join("\n"));
}
