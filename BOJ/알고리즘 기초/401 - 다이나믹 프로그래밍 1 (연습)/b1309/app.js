const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let arr = Array(input + 1);
  for (let i = 1; i <= input; i++) {
    if (i === 1) {
      arr[i] = 3;
    } else if (i === 2) {
      arr[i] = 7;
    } else {
      arr[i] = (arr[i - 2] + arr[i - 1] * 2) % 9901;
    }
  }
  console.log(arr[input]);
}
