const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(array) {
  let str = "";
  let current = array.split("");
  let word = "";
  for (let i = 0; i < current.length; i++) {
    if (current[i] === "<") {
      str += word.split("").reverse().join("");
      word = "";
      while (current[i] !== ">") {
        str += current[i];
        i++;
      }
      str += ">";
    } else if (current[i] === " ") {
      str += `${word.split("").reverse().join("")} `;
      word = "";
    } else {
      word += current[i];
    }
  }
  if (word.length !== 0) {
    str += `${word.split("").reverse().join("")} `;
    word = "";
  }
  console.log(str);
}
