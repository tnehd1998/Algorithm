const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split(" ");

solution(num[0], num[1]);

function solution(num1, num2) {
  let newNum1 = +(num1[2] + num1[1] + num1[0]);
  let newNum2 = +(num2[2] + num2[1] + num2[0]);
  if (newNum1 > newNum2) console.log(newNum1);
  else console.log(newNum2);
}
