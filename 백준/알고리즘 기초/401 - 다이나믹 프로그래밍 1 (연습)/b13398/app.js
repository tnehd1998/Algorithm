const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
let array = input[0].split(" ").map((item) => +item);

solution(+arrayLength, array);

function solution(T, input) {
  let result = [];
  for (let i = 0; i < T; i++) {
    result.push([0, 0]);
  }
  result[0][0] = input[0];
  result[0][1] = input[0];
  let max = input[0];
  for (let i = 1; i < input.length; i++) {
    result[i][0] = result[i][1] = input[i];
    result[i][0] = Math.max(input[i], input[i] + result[i - 1][0]);
    result[i][1] = Math.max(result[i - 1][0], input[i] + result[i - 1][1]);
    max = Math.max(max, result[i][0], result[i][1]);
  }
  console.log(max);
}
