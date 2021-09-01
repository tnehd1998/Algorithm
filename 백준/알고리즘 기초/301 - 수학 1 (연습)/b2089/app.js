const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let result = [];
  let num = input;
  if (num === 0) {
    console.log(0);
  } else {
    while (num) {
      if (num % -2) {
        result.unshift(1);
        num = Math.ceil(num / -2);
      } else {
        result.unshift(0);
        num /= -2;
      }
    }
    console.log(result.join(""));
  }
}
