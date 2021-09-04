const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input[0].split(" ").map((item) => +item);

solution(+arrayLength, input);

function solution(T, input) {
  let dp = Array(T).fill(0);
  for (let i = 0; i < T; i++) {
    dp[i] = [1, [input[i]]];
    for (let j = 0; j < i; j++) {
      if (dp[i][0] < dp[j][0] + 1 && input[j] < input[i]) {
        dp[i][1] = [...dp[j][1], input[i]];
        dp[i][0] = dp[j][0] + 1;
      }
    }
  }
  let maxValue = dp[0][0];
  let temp = dp[0][1];
  for (let i = 1; i < dp.length; i++) {
    if (maxValue < dp[i][0]) {
      maxValue = dp[i][0];
      temp = dp[i][1];
    }
  }
  console.log(temp.length);
  console.log(temp.join(" "));
}
