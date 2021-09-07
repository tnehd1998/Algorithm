const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input.map((value) => value.split(" ").map((item) => +item));
solution(+arrayLength, input);

function solution(T, input) {
  let dp = Array.from(Array(1001), () => Array(3));
  let max = 1000005;
  let min = max;
  for (let k = 0; k < 3; k++) {
    dp[0][0] = dp[0][1] = dp[0][2] = max;
    dp[0][k] = input[0][k];
    for (let i = 1; i < T; i++) {
      dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + input[i][0];
      dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + input[i][1];
      dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + input[i][2];
    }
    for (let i = 0; i < 3; i++) {
      if (i !== k) min = Math.min(min, dp[T - 1][i]);
    }
  }
  console.log(min);
}
