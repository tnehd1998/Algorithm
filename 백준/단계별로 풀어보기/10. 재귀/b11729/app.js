const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(input) {
  let count = 0;
  let answer = [];
  function Hanoi(num, from, other, to) {
    if (num === 0) {
      return;
    } else {
      Hanoi(num - 1, from, to, other);
      answer.push([from, to]);
      count++;
      Hanoi(num - 1, other, from, to);
    }
  }
  Hanoi(input, "1", "2", "3");
  console.log(count);
  console.log(answer.map((item) => item.join(" ")).join("\n"));
}
