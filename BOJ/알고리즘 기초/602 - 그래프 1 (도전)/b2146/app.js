const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
for (let i = 0; i < +testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(+testCase, input);

function solution(T, input) {
  console.log(T, input);
}
