const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input[0].split(" ").map((item) => +item);
input[1] = input[1].split(" ").map((item) => +item);

solution(testCase[0], testCase[1], input[1]);

function solution(N, S, array) {
  let count = 0;
  let output = [];
  function dfs(cnt) {
    if (cnt === N) {
      let sum = output.reduce((prev, curr) => prev + curr, 0);
      if (sum === S) count++;
      return;
    }
    output.push(array[cnt]);
    dfs(cnt + 1);
    output.pop();
    dfs(cnt + 1);
  }
  dfs(0);

  if (S === 0) count--;
  console.log(count);
}
