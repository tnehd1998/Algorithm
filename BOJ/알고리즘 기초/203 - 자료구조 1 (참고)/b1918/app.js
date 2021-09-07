// JavaScript 통과 불가능 🤮
// 구글링해봐도 JS로 풀어서 통과한 사람 X

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let result = "";
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      arr.push(input[i]);
    } else if (input[i] === ")") {
      let popped = arr.pop();
      while (popped !== "(") {
        result += popped;
        popped = arr.pop();
      }
    } else if (input[i] === "*" || input[i] === "/") {
      while (
        arr.length &&
        (arr[arr.length - 1] === "*" || arr[arr.length - 1] === "/")
      ) {
        result += arr.shift();
      }
      arr.push(input[i]);
    } else if (input[i] === "+" || input[i] === "-") {
      while (arr.length && arr[arr.length - 1] !== "(") {
        result += arr.shift();
      }
      arr.push(input[i]);
    } else {
      result += input[i];
    }
  }
  result += arr.pop();
  console.log(result);
}
