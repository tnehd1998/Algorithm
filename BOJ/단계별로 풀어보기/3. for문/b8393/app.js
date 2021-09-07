const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  console.log(total);
}
