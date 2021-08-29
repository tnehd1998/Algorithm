const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = input.shift();
solution(arrayLength, input);

function solution(T, input) {
  let arr = [];
  let result = [];
  for (let i = 0; i < T; i++) {
    let current = input[i];
    if (current.includes("push_front")) {
      let value = current.split(" ");
      arr.unshift(value[1]);
    } else if (current.includes("push_back")) {
      let value = current.split(" ");
      arr.push(value[1]);
    } else if (current === "pop_front") {
      if (arr.length) {
        let value = arr.shift();
        result.push(value);
      } else {
        result.push(-1);
      }
    } else if (current === "pop_back") {
      if (arr.length) {
        let value = arr.pop();
        result.push(value);
      } else {
        result.push(-1);
      }
    } else if (current === "size") {
      result.push(arr.length);
    } else if (current === "empty") {
      if (arr.length) {
        result.push(0);
      } else {
        result.push(1);
      }
    } else if (current === "front") {
      if (arr.length) {
        result.push(arr[0]);
      } else {
        result.push(-1);
      }
    } else if (current === "back") {
      if (arr.length) {
        result.push(arr[arr.length - 1]);
      } else {
        result.push(-1);
      }
    }
  }
  console.log(result.join("\n"));
}
