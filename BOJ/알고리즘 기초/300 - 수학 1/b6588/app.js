const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.pop();

solution(input);

function solution(array) {
  let maxNum = Math.max(...array);
  let checkNum = Array(maxNum + 1).fill(false);
  for (let i = 2; i < maxNum; i++) {
    if (!checkNum[i]) {
      for (let j = i * i; j <= maxNum; j += i) {
        checkNum[j] = true;
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = 3; j < current; j += 2) {
      if (!checkNum[j] && !checkNum[checkNum - j]) {
        console.log(`${current} = ${j} + ${current - j}`);
        break;
      }
    }
  }
}
