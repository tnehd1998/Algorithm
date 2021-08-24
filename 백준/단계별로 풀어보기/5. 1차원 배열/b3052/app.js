const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input);

function solution(input) {
  let array = Array(42).fill(0);
  let diffNum = 0;
  for (let i = 0; i < 10; i++) {
    input[i] = input[i] % 42;
    array[input[i]]++;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) diffNum++;
  }
  console.log(diffNum);
}
