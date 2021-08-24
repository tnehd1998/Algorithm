const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0], input[1]);

function solution(num, arr) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += +arr[i];
  }
  console.log(total);
}
