const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let dp = Array(num + 1);
  let answer = 0;
  if (num % 2 !== 1) {
    dp[0] = 1;
    dp[2] = 3;
    for (let i = 4; i <= num; i += 2) {
      dp[i] = dp[i - 2] * dp[2];
      for (let j = i - 4; j >= 0; j -= 2) {
        dp[i] += dp[j] * 2;
      }
    }
    answer = dp[num];
  }
  console.log(answer);
}
