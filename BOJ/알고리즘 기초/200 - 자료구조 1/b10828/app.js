const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = input.shift();
solution(arrayLength, input);

function solution(T, array) {
  let result = [];
  let resultAll = [];
  for (let i = 0; i < T; i++) {
    if (array[i].includes("push")) {
      let current = array[i].split(" ");
      result.push(+current[1]);
    } else {
      switch (array[i]) {
        case "pop":
          if (result.length === 0) {
            resultAll.push(-1);
          } else {
            const popped = result.pop();
            resultAll.push(popped);
          }
          break;
        case "size":
          resultAll.push(result.length);
          break;
        case "empty":
          if (result.length === 0) {
            resultAll.push(1);
          } else {
            resultAll.push(0);
          }
          break;
        case "top":
          if (result.length === 0) {
            resultAll.push(-1);
          } else {
            resultAll.push(result[result.length - 1]);
          }
          break;
      }
    }
  }
  console.log(resultAll.join("\n"));
}
