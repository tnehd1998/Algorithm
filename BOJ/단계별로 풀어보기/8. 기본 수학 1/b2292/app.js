const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let room = 0;
  let initialNum = num - 1;
  let i = 0;
  while (true) {
    i++;
    if (initialNum <= 0) {
      room = i;
      break;
    }
    initialNum -= 6 * i;
  }
  console.log(room);
}
