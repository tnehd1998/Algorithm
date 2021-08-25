const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const array = input[0].split(" ").map((item) => +item);

solution(array[0], array[1], array[2]);

function solution(A, B, C) {
  console.log(Math.ceil((C - B) / (A - B)));
}
