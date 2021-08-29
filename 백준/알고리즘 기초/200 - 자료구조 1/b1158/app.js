const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let value = input[0].split(" ");

solution(+value[0], +value[1]);

function solution(N, K) {
  let array = Array(N)
    .fill(0)
    .map((el, i) => i + 1);
  let result = "<";
  while (array.length) {
    for (let i = 0; i < K - 1; i++) {
      array.push(array.shift());
    }
    if (array.length === 1) {
      result += `${array.shift()}>`;
    } else {
      result += `${array.shift()}, `;
    }
  }
  console.log(result);
}
