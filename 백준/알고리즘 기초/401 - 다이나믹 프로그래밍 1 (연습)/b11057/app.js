const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let arr = Array.from(Array(input + 1), () => Array(10).fill(1));
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j < 10; j++) {
      arr[i][j] = (arr[i - 1][j] + arr[i][j - 1]) % 10007;
    }
  }
  console.log(arr[input][9] % 10007);
}
