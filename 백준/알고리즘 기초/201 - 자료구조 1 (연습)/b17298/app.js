const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCaseNum = +input[0];
let testCase = input[1].split(" ").map((item) => +item);
solution(testCaseNum, testCase);

function solution(T, array) {
  let arr = [];
  let result = Array(T).fill(-1);
  for (let i = 0; i < T; i++) {
    while (arr.length && array[arr[arr.length - 1]] < array[i]) {
      result[arr.pop()] = array[i];
    }
    arr.push(i);
  }
  console.log(result.join(" "));
}
