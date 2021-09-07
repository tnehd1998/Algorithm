const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  for (let i = 0; i < num / 3 + 1; i++) {
    for (let j = 0; j < num / 5 + 1; j++) {
      if (num === 3 * i + 5 * j) {
        console.log(i + j);
        return;
      }
    }
  }
  console.log(-1);
}
