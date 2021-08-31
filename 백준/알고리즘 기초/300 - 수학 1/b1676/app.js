const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let two = 0;
  let five = 0;
  for (let i = 2; i <= num; i++) {
    let current = i;
    while (current % 5 === 0) {
      five++;
      current /= 5;
    }
    while (current % 2 === 0) {
      two++;
      current /= 2;
    }
  }
  console.log(two < five ? two : five);
}
