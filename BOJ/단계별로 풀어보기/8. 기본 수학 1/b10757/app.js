const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ");
solution(input[0], input[1]);

function solution(num1, num2) {
  const A = BigInt(num1);
  const B = BigInt(num2);
  console.log((A + B).toString());
}
