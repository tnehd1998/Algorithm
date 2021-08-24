const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let str = input.split(" ");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length !== 0) {
      count++;
    }
  }
  console.log(count);
}
