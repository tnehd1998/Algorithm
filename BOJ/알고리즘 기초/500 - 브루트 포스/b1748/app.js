const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input[0]);

function solution(n) {
  let answer = 0,
    gu = 9;
  answer = n.length * (n - 10 ** (n.length - 1) + 1);
  if (n.length > 1) {
    for (let i = 1; i < n.length; i++) {
      answer += i * gu;
      gu *= 10;
    }
  }
  console.log(answer);
}
