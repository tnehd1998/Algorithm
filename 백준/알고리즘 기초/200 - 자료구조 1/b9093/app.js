const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = input.shift();
solution(arrayLength, input);

function solution(T, array) {
  for (let i = 0; i < T; i++) {
    let str = "";
    let current = array[i].split(" ");
    for (let item of current) {
      if (item.length === 1) {
        str += `${item} `;
      } else {
        str += `${item.split("").reverse().join("")} `;
      }
    }
    console.log(str);
  }
}
