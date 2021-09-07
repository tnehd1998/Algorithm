const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let current = parseInt(input[i], 8);
    let change = current.toString(2);
    while (i !== 0 && change.length < 3) {
      change = "0" + change;
    }
    result += change;
  }
  console.log(result);
}
