const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let answer = 0;
  let count = 0;
  while (answer !== num) {
    count++;
    if (`${count}`.includes("666")) answer++;
  }
  console.log(count);
}
