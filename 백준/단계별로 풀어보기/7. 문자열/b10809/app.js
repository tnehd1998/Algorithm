const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let arr = Array(26).fill(-1);
  for (let i = 0; i < input.length; i++) {
    if (arr[Number(input[i].charCodeAt()) - 97] === -1) {
      arr[Number(input[i].charCodeAt()) - 97] = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(arr[i] + " ");
  }
}
