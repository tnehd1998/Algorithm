const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input.shift();
input[0] = input[0].split(" ");

solution(testCase, input[0]);

function solution(T, array) {
  let visited = Array(T + 1);
  let output = [];
  let result = [];
  function checkNum(output) {
    for (let i = 0; i < T; i++) {
      if (array[i] === "<") {
        if (output[i] > output[i + 1]) return false;
      } else {
        if (output[i] < output[i + 1]) return false;
      }
    }
    return true;
  }
  function dfs(cnt) {
    if (cnt === T + 1) {
      if (checkNum(output)) result.push(output.join(""));
      return;
    }
    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }
  dfs(0);
  console.log(result[result.length - 1]);
  console.log(result[0]);
}
