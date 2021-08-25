const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  if (num === 1) {
    console.log("1/1");
    return;
  }
  let count = 1;
  let initialNum = num - 1;
  while (true) {
    count++;
    if (initialNum <= count) {
      break;
    }
    initialNum -= count;
  }
  if (count % 2 !== 0) {
    console.log(`${count + 1 - initialNum}/${initialNum}`);
  } else {
    console.log(`${initialNum}/${count + 1 - initialNum}`);
  }
}
