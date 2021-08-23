const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);
solution(input[0], input[1]);

function solution(num1, num2) {
  if (num2 < 45 && num1 === 0) {
    console.log(23, num2 - 45 + 60);
  } else if (num2 < 45) {
    console.log(num1 - 1, num2 - 45 + 60);
  } else {
    console.log(num1, num2 - 45);
  }
}
