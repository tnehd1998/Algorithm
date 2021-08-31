const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(num1, num2) {
  let count = 0;
  let N = Math.min(num1, num2);
  for (let i = 1; i <= N; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      count = i;
    }
  }
  console.log(count * (num1 / count) * (num2 / count));
}
