const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
let array = input[0].split(" ").map((item) => +item);

solution(+arrayLength, array);

function solution(T, input) {
  let arr = Array(T + 1).fill(0);
  input.unshift(0);
  for (let i = 1; i <= T; i++) {
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j]) {
        arr[i] = Math.max(arr[i], arr[j] + input[i]);
      }
    }
  }
  console.log(Math.max(...arr));
}
