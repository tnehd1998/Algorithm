const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0], +input[1]);

function solution(num1, num2) {
  let arr = [];
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    let current = i;
    for (let j = 2; j <= current; j++) {
      if (j === current) {
        arr.push(i);
      } else if (current % j === 0) {
        break;
      }
    }
  }
  if (arr.length === 0) {
    return console.log(-1);
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  console.log(arr[0]);
}
