const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = input.shift();
input = input.map((item) => +item);

solution(+testCase, [0, 0, 0, ...input]);

function solution(T, input) {
  let answer = 0;
  let dp = Array(T + 3).fill(0);
  for (let i = 3; i < T + 3; i++) {
    dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
    dp[i] = Math.max(dp[i - 1], dp[i]);
    answer = Math.max(answer, dp[i]);
  }
  console.log(answer);
}
