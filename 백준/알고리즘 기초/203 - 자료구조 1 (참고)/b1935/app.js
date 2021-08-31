const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input.shift();
let testCase = input.shift().split("");
solution(+num, testCase, input);

function solution(T, testCase, input) {
  let num = Array(T);
  for (let i = 0; i < T; i++) {
    num[i] = input[i];
  }
  let answer = [];
  for (let i = 0; i < testCase.length; i++) {
    if (testCase[i] === "*") {
      let num1 = answer.pop();
      let num2 = answer.pop();
      num1 = +num1 ? num1 : +num[num1.charCodeAt() - 65];
      num2 = +num2 ? num2 : +num[num2.charCodeAt() - 65];
      let action = num2 * num1;
      answer.push(action);
    } else if (testCase[i] === "+") {
      let num1 = answer.pop();
      let num2 = answer.pop();
      num1 = +num1 ? num1 : +num[num1.charCodeAt() - 65];
      num2 = +num2 ? num2 : +num[num2.charCodeAt() - 65];
      let action = num2 + num1;
      answer.push(action);
    } else if (testCase[i] === "-") {
      let num1 = answer.pop();
      let num2 = answer.pop();
      num1 = +num1 ? num1 : +num[num1.charCodeAt() - 65];
      num2 = +num2 ? num2 : +num[num2.charCodeAt() - 65];
      let action = num2 - num1;
      answer.push(action);
    } else if (testCase[i] === "/") {
      let num1 = answer.pop();
      let num2 = answer.pop();
      num1 = +num1 ? num1 : +num[num1.charCodeAt() - 65];
      num2 = +num2 ? num2 : +num[num2.charCodeAt() - 65];
      let action = num2 / num1;
      answer.push(action);
    } else {
      answer.push(testCase[i]);
    }
  }
  console.log(answer[0].toFixed(2));
}
