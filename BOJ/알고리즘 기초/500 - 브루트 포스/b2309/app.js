const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => +item);
solution(input);

function solution(input) {
  let total = input.reduce((prev, curr) => prev + curr, 0) - 100;
  let arr;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (input[i] + input[j] === total) {
        arr = input.filter((item) => item !== input[i] && item !== input[j]);
        break;
      }
    }
    if (arr) break;
  }
  arr.sort((a, b) => a - b);
  console.log(arr.join("\n"));
}
