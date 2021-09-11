const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input.shift();
for (let i = 0; i < testCase; i++) {
  input[i] = input[i].split(" ");
}

solution(testCase, input);

function solution(T, array) {
  let bit = 0;
  let answer = "";
  for (let i = 0; i < T; i++) {
    let method = array[i][0];
    let value = array[i][1];
    switch (method) {
      case "add":
        bit |= 1 << value;
        break;
      case "check":
        if (bit & (1 << value)) {
          answer += `1\n`;
        } else {
          answer += `0\n`;
        }
        break;
      case "remove":
        bit &= ~(1 << value);
        break;
      case "toggle":
        bit ^= 1 << value;
        break;
      case "all":
        bit = (1 << 21) - 1;
        break;
      case "empty":
        bit = 0;
        break;
    }
  }
  console.log(answer.trim());
}
