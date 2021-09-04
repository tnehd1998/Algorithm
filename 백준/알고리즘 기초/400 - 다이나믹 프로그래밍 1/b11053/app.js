const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input[0].split(" ").map((item) => +item);

solution(+arrayLength, input);

function solution(T, input) {
  let arr = Array(T).fill(1);
  for (let i = 1; i < T; i++) {
    let values = [1];
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j]) {
        values.push(arr[j] + 1);
      }
    }
    arr[i] = Math.max(...values);
  }
  console.log(Math.max(...arr));
}
