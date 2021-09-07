const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input.map((value) => value.split(" ").map((item) => +item));
solution(+arrayLength, input);

function solution(T, input) {
  for (let i = 1; i < T; i++) {
    input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
    input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
    input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2];
  }
  console.log(input);
  console.log(Math.min(...input[T - 1]));
}
