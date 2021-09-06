const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
let array = input[0].split(" ").map((item) => +item);

solution(+arrayLength, array);

function solution(T, input) {
  let frontDP = Array(T).fill(1);
  let backDP = Array(T).fill(1);
  for (let i = 1; i < T; i++) {
    let current = input[i];
    let count = 1;
    for (let j = 0; j < i; j++) {
      let check = input[j];
      if (current > check) count = Math.max(count, frontDP[j] + 1);
    }
    frontDP[i] = count;
  }
  for (let i = T - 2; i >= 0; i--) {
    let current = input[i];
    let count = 1;
    for (let j = i + 1; j < T; j++) {
      let check = input[j];
      if (current > check) count = Math.max(count, backDP[j] + 1);
    }
    backDP[i] = count;
  }
  let answer = frontDP.map((item, index) => item + backDP[index]);
  console.log(Math.max(...answer) - 1);
}
