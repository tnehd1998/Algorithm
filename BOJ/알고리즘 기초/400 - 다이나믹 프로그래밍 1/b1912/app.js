const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input[0].split(" ").map((item) => +item);

solution(+arrayLength, input);

function solution(T, input) {
  let dp = [];
  input.forEach((v) => {
    if (dp.length === 0) dp.push(v);
    else {
      dp.push(Math.max(v, v + dp[dp.length - 1]));
    }
  });
  console.log(Math.max(...dp));
}
