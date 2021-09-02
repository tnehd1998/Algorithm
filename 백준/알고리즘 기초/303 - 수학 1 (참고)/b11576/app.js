const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let useType = input[0].split(" ").map((item) => +item);
let numbers = input[2].split(" ").map((item) => +item);

solution(useType[0], useType[1], +input[1], numbers);

function solution(A, B, m, numbers) {
  let num = 0;
  let answer = [];
  for (let i = 0; i < m; i++) {
    num += numbers[i] * A ** (numbers.length - i - 1);
  }
  let str = parseInt(num, 10).toString(B);
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if ("a" <= current && current <= "z") {
      answer.push(current.charCodeAt() - 97 + 10);
    } else {
      answer.push(current);
    }
  }
  console.log(answer.join(" "));
}
