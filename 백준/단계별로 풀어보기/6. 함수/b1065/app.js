const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let count = 0;
  for (let i = 1; i <= input; i++) {
    count += d(i);
  }
  console.log(count);
}

function d(num) {
  if (num < 100) return 1;
  let strNum = String(num);
  let strDiff = Array(strNum.length - 1).fill(0);
  for (let i = 0; i < strNum.length - 1; i++) {
    strDiff[i] = Number(strNum[i + 1]) - Number(strNum[i]);
  }
  for (let i = 0; i < strDiff.length - 1; i++) {
    if (strDiff[i] !== strDiff[i + 1]) return 0;
  }
  return 1;
}
