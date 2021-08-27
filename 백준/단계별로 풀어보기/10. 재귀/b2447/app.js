const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let result = "";

const star = (i, j, num) => {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (num === 1) {
      result += "*";
    } else {
      star(Math.floor(i / 3), Math.floor(j / 3), Math.floor(num / 3));
    }
  }
};

const solution = (input) => {
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      star(i, j, input);
    }
    result += "\n";
  }
  console.log(result);
};

solution(+input[0]);
