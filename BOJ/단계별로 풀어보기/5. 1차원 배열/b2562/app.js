const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input);

function solution(input) {
  let maxNum = input[0];
  let index = 0;
  for (let i = 1; i < input.length; i++) {
    if (maxNum < input[i]) {
      maxNum = input[i];
      index = i;
    }
  }
  console.log(maxNum);
  console.log(index + 1);
}
