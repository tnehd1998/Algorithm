const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arr = input[0].split(" ");
solution(arr[0], arr[1], arr[2], arr[3]);

function solution(A, B, C, D) {
  console.log(+(A + B) + +(C + D));
}
