const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();

solution(arrayLength, input);

function solution(T, input) {
  let arr = Array(12).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (i === 1) {
      arr[i] = 1;
    } else if (i === 2) {
      arr[i] = 2;
    } else if (i === 3) {
      arr[i] = 4;
    } else {
      arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
  }
  for (let i = 0; i < T; i++) {
    console.log(arr[input[i]]);
  }
}
