// 100%에서 틀렸다고 나옴
// 이유 알수 없음 🤬

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = input.shift();
input = input.map((item) => +item);
solution(+testCase, input);

function solution(T, input) {
  let result = [];
  let maxValue = Math.max(...input);
  let numbers = Array(maxValue + 1).fill(false);

  for (let i = 2; i < maxValue; i++) {
    if (numbers[i] === false) {
      for (let j = i * i; j <= maxValue; j += i) {
        numbers[j] = true;
      }
    }
  }

  for (let i = 0; i < T; i++) {
    let count = 0;
    let current = input[i];
    for (let j = 3; j <= current / 2; j += 2) {
      if (!numbers[j] && !numbers[current - j]) {
        count++;
      }
    }
    result.push(count);
  }
  console.log(result.join("\n"));
}
