const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  console.log(fibonacci(input));
}

function fibonacci(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fibonacci(num - 1) + fibonacci(num - 2);
}
