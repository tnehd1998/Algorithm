const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let array = Array(26).fill(0);
  for (let i = 0; i < input.length; i++) {
    array[input[i].charCodeAt() - 97]++;
  }
  console.log(array.join(" "));
}
