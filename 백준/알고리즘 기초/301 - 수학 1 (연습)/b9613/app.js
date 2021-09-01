const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = input.shift();

solution(+testCase, input);

function GCB(num1, num2) {
  while (num2) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

function solution(T, input) {
  let sum = [];
  for (let i = 0; i < T; i++) {
    let current = input[i].split(" ").map((item) => +item);
    let num = current.shift();
    let total = 0;
    for (let j = 0; j < num - 1; j++) {
      for (let k = j + 1; k < num; k++) {
        total += GCB(current[j], current[k]);
      }
    }
    sum.push(total);
  }
  console.log(sum.join("\n"));
}
