const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0].toLowerCase());

function solution(input) {
  let arr = Array(26).fill(0);
  let max = 0;
  let index = -1;
  let letter = "";
  for (let i = 0; i < input.length; i++) {
    arr[input[i].charCodeAt() - 97]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i] && i !== index) {
      letter = "?";
      break;
    }
    letter = String.fromCharCode(index + 97).toUpperCase();
  }
  console.log(letter);
}
