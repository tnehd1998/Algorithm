const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = input.shift();

solution(testCase, input);

function GCB(num1, num2) {
  while (num2) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

function solution(T, input) {
  let [N, S] = T.split(" ").map((item) => +item);
  let arr = input[0].split(" ").map((item) => +item);
  let result = Math.abs(arr[0] - S);
  for (let i = 1; i < N; i++) {
    result = GCB(result, Math.abs(arr[i + 1] - S));
  }
  console.log(result);
}
