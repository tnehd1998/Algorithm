const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let num = [];
  let total = 0;
  let count = 0;
  let result = [];
  for (let i = 0; i < input.length; i++) {
    num.unshift(input[i]);
  }
  for (let i = 0; i < num.length; i++) {
    total += num[i] * 2 ** i;
  }
  let countTotal = total;
  while (countTotal > 8 ** count) {
    countTotal /= 8;
    count++;
  }
  for (let i = count; i > 0; i--) {
    let num1 = Math.floor(total / 8 ** i);
    let num2 = total % 8 ** i;
    total = num2;
    result.push(num1);
  }
  result.push(total);
  console.log(result.join(""));
}
