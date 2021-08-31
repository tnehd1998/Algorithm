const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if ("A" <= input[i] && input[i] <= "Z") {
      let current = input[i].charCodeAt() + 13;
      if (current > 90) {
        current -= 26;
        result += String.fromCharCode(current);
      } else {
        result += String.fromCharCode(current);
      }
    } else if ("a" <= input[i] && input[i] <= "z") {
      let current = input[i].charCodeAt() + 13;
      if (current > 122) {
        current -= 26;
        result += String.fromCharCode(current);
      } else {
        result += String.fromCharCode(current);
      }
    } else {
      result += input[i];
    }
  }
  console.log(result);
}
