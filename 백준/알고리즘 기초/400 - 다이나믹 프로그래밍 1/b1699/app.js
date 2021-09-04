const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let arr = [];
  for (let i = 0; i <= input; i++) {
    arr.push(i);
  }
  for (let i = 1; i <= input; i++) {
    for (let j = 2; j ** 2 <= i; j++) {
      arr[i] = Math.min(arr[i], arr[i - j ** 2] + 1);
    }
  }
  console.log(arr.pop());
}
