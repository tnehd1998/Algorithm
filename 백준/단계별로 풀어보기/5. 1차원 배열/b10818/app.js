const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const items = input[1].split(" ").map((item) => +item);

solution(arrayLength, items);

function solution(arrayLength, items) {
  let maxNum = items[0];
  let minNum = items[0];
  for (let i = 1; i < arrayLength; i++) {
    if (items[i] > maxNum) maxNum = items[i];
    if (items[i] < minNum) minNum = items[i];
  }
  console.log(minNum, maxNum);
}
