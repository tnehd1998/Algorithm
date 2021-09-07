const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  const stringB = String(B);
  console.log(A * +stringB.substring(2, 3));
  console.log(A * +stringB.substring(1, 2));
  console.log(A * +stringB.substring(0, 1));
  console.log(A * B);
}
