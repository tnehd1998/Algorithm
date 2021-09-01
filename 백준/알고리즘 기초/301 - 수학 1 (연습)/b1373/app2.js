const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let result = "";
  while (input.length >= 3) {
    result = parseInt(input.slice(input.length - 3), 2).toString(8) + result;
    input = input.slice(0, input.length - 3);
  }
  if (input.length !== 0) {
    result = parseInt(input, 2).toString(8) + result;
  }
  console.log(result);
}
