const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
input = input.map((item) => +item);

solution(+testCase, input);

function solution(T, arr) {
  let dp = Array(T).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0] + arr[1], arr[1]);
  dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);
  for (let i = 3; i < T; i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }
  console.log(dp[T - 1]);
}
