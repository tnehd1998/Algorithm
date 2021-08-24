const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  const initialNum = num;
  let currentNum = num;
  let changeNum = -1;
  let count = 0;
  while (initialNum !== changeNum) {
    if (currentNum < 10) {
      changeNum = 0 + currentNum;
    } else {
      changeNum = Math.floor(currentNum / 10) + (currentNum % 10);
    }
    changeNum = (currentNum % 10) * 10 + (changeNum % 10);
    currentNum = changeNum;
    count++;
  }
  console.log(count);
}
