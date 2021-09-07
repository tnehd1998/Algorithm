const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1], input[2], input[3]);

function solution(x, y, w, h) {
  const minX = Math.min(x, w - x);
  const minY = Math.min(y, h - y);
  console.log(Math.min(minX, minY));
}
