const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(num) {
  let arr = String(num);
  let sorting = Array(4).fill(0);
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    sorting.push(arr[i]);
  }
  sorting = sorting.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    result += sorting[i];
  }
  console.log(result);
}
