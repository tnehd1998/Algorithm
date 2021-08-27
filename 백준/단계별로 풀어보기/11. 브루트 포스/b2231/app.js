const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let start = input - String(input).length * 9;
  let M = start;
  let answer;
  while (true) {
    M++;
    let sum = M;
    for (let i = 0; i < String(M).length; i++) {
      sum = sum + Number(String(M).charAt(i));
    }
    if (sum === input) {
      answer = M;
      break;
    }
    if (M >= input) {
      answer = 0;
      break;
    }
  }
  console.log(answer);
}
