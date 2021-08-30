const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let result = 0;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      arr.push(input[i]);
    } else {
      arr.pop();
      if (input[i - 1] === "(") {
        result += arr.length;
      } else {
        result += 1;
      }
    }
  }
  console.log(result);
}
