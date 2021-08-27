const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  console.log(factorial(input));
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
