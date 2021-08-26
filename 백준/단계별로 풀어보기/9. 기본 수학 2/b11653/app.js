const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  if (num === 1) return;
  let current = num;
  let count = 2;
  while (current !== 1) {
    if (current % count === 0) {
      console.log(count);
      current /= count;
    } else {
      count++;
    }
  }
}
