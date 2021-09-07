const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "c") {
      if (input[i + 1] === "=" || input[i + 1] === "-") {
        i++;
        count++;
      } else {
        count++;
      }
    } else if (input[i] === "d") {
      if (input[i + 1] === "-") {
        i++;
        count++;
      } else if (input[i + 1] === "z" && input[i + 2] === "=") {
        i = i + 2;
        count++;
      } else {
        count++;
      }
    } else if (input[i] === "l" && input[i + 1] === "j") {
      i++;
      count++;
    } else if (input[i] === "n" && input[i + 1] === "j") {
      i++;
      count++;
    } else if (input[i] === "s" && input[i + 1] === "=") {
      i++;
      count++;
    } else if (input[i] === "z" && input[i + 1] === "=") {
      i++;
      count++;
    } else {
      count++;
    }
  }
  console.log(count);
}
