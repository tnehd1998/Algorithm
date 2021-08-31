const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    result.push(input.slice(i));
  }
  console.log(result.sort().join("\n"));
}
