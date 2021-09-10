const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input[0], input[1]);

function solution(T, input) {
  let tmp = [];
  let broke = -1;
  let min = 10001;
  input = input.split(" ");
  for (let i = T - 1; i >= 0; i--) {
    if (min * 1 < input[i] * 1) {
      broke = i;
      break;
    }
    tmp.push(input[i]);
    min = input[i] * 1;
  }
  if (broke === -1) return console.log(-1);
  for (let i = 0; i < tmp.length; i++) {
    if (input[broke] * 1 > tmp[i] * 1) {
      let change = tmp.splice(i, 1, input[broke]);
      input[broke] = change.join("");
      break;
    }
  }
  console.log(input.slice(0, broke + 1).join(" ") + " " + tmp.join(" "));
}
