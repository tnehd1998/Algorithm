const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = input.shift();
solution(arrayLength, input);

function solution(T, array) {
  let answer = [];
  let check = [];
  let count = 0;
  for (let i = 1; i <= T; i++) {
    answer.push("+");
    check.push(i);
    while (true) {
      if (+array[count] === check[check.length - 1]) {
        check.pop();
        answer.push("-");
        count++;
      } else {
        break;
      }
    }
  }
  if (check.length === 0) {
    console.log(answer.join("\n"));
  } else {
    console.log("NO");
  }
}
