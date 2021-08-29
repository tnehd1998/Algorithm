const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const initialValue = input[0];
const arrayLength = +input[1];
solution(initialValue, arrayLength, input);

function solution(initial, T, input) {
  let stack1 = initial.split("");
  let stack2 = [];
  for (let i = 2; i < T + 2; i++) {
    let current = input[i];
    if (current === "L" && stack1.length) {
      let value = stack1.pop();
      stack2.push(value);
    } else if (current === "D" && stack2.length) {
      let value = stack2.pop();
      stack1.push(value);
    } else if (current === "B") {
      stack1.pop();
    } else if (current.includes("P")) {
      let value = current.split(" ");
      stack1.push(value[1]);
    }
  }
  let result = stack1.join("");
  result += stack2.reverse().join("");
  console.log(result);
}
