const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let arr = Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      arr[i] = 1;
    } else if (i === 1) {
      arr[i] = 1;
    } else {
      arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
    }
  }
  console.log(arr[num]);
}
