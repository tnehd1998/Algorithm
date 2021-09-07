const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
}
