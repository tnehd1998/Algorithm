const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();

solution(+arrayLength, input);

function solution(T, array) {
  for (let i = 0; i < T; i++) {
    let count = 0;
    let current = array[i].split(" ").map((item) => +item);
    let num1 = current[0];
    let num2 = current[1];
    let N = Math.min(num1, num2);
    for (let i = 1; i <= N; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        count = i;
      }
    }
    console.log(count * (num1 / count) * (num2 / count));
  }
}
