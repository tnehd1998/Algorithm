const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const inputArray = input.map((item) => item.split(" ").map((nums) => +nums));

solution(inputArray);

function solution(array) {
  let sortedArray = array.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  console.log(sortedArray.map((v) => v.join(" ")).join("\n"));
}
