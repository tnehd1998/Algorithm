const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input);

function solution(input) {
  let arrCount = Array(10).fill(0);
  let num = input[0] * input[1] * input[2];
  num = num + "";
  for (let i = 0; i < num.length; i++) {
    arrCount[+num[i]]++;
  }
  for (let i = 0; i < arrCount.length; i++) {
    console.log(arrCount[i]);
  }
}
