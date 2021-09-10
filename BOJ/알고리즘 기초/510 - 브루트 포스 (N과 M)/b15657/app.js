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
  let result = "";
  function dfs(idx, cnt) {
    if (cnt === M) {
      result += `${output.join(" ")}\n`;
      return;
    }
    for (let i = idx; i < N; i++) {
      output.push(array[i]);
      dfs(i, output.length);
      output.pop();
    }
  }
  dfs(0, 0);
  console.log(result.trim());
}
