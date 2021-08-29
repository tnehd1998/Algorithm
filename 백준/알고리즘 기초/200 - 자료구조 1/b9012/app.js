const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = input.shift();
solution(arrayLength, input);

function solution(T, array) {
  for (let i = 0; i < T; i++) {
    let current = array[i];
    let str = [];
    let over = false;
    for (let j = 0; j < current.length; j++) {
      if (current[j] === "(") {
        str.push(1);
      } else {
        if (str.length === 0) {
          over = true;
        }
        str.pop();
      }
    }
    if (str.length === 0 && !over) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
