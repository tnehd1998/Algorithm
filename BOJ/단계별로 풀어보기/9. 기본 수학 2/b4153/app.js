const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.pop();
const inputArray = [];
for (let i = 0; i < input.length; ++i) {
  const arr = input[i].split(" ").sort((a, b) => a - b);
  inputArray.push({
    first: +arr[0],
    second: +arr[1],
    third: +arr[2],
  });
}

solution(inputArray);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (
      Math.pow(current.first, 2) + Math.pow(current.second, 2) ===
      Math.pow(current.third, 2)
    ) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
}
