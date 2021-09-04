const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let arr = Array(num + 1);
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      arr[i] = BigInt(1);
    } else if (i === 2) {
      arr[i] = BigInt(1);
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  console.log(arr[num].toString());
}
