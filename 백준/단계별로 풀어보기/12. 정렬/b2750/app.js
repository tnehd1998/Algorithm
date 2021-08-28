const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input);

function solution(input) {
  const num = input.shift();
  let array = input.sort((a, b) => a - b);
  for (let i = 0; i < num; i++) {
    console.log(array[i]);
  }
}
