const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();

solution(arrayLength, input);

function solution(T, input) {
  let arr = [];
  let divider = 1000000009;
  let maxNum = Math.max(...input);
  for (let i = 1; i <= maxNum; i++) {
    if (i === 1) {
      arr[i] = 1;
    } else if (i === 2) {
      arr[i] = 2;
    } else if (i === 3) {
      arr[i] = 4;
    } else {
      arr[i] = (arr[i - 3] + arr[i - 2] + arr[i - 1]) % divider;
    }
  }
  for (let i = 0; i < T; i++) {
    console.log(arr[input[i]]);
  }
}
