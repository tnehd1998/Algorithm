const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let divider = 1000000000;
  let arr = Array.from(Array(num + 1), () => Array(11).fill(0));
  for (let i = 1; i <= 9; i++) {
    arr[1][i] = 1;
  }
  for (let i = 2; i <= num; i++) {
    arr[i][0] = arr[i - 1][1];
    for (let j = 1; j <= 9; j++) {
      arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j + 1]) % divider;
    }
  }
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result += arr[num][i];
  }
  console.log(result % divider);
}
