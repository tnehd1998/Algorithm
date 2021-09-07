const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
let array = [];
for (let i = 0; i < input.length; i++) {
  array.push(input[i].split(" ").map((item) => +item));
}

solution(+arrayLength, array);

function solution(T, input) {
  let max = 0;
  console.log(T, input);
  for (let i = 1; i < T; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) input[i][j] += input[i - 1][j];
      else if (i === j) input[i][j] += input[i - 1][j - 1];
      else {
        input[i][j] += Math.max(input[i - 1][j - 1], input[i - 1][j]);
      }
      if (max < input[i][j]) max = input[i][j];
    }
  }
  console.log(max);
}
