const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num1 = input[0].split("");
input = input[2].split(" ");
solution(num1, input);

function solution(N, input) {
  let button = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let diff = [];
  let diff_max = [];
  let result = Math.abs(N.join("") * 1 - 100);
  input.reduce((prev, curr) => {
    button.splice(button.indexOf(curr), 1);
  }, "");

  if (button.length > 0) {
    for (let i = 0; i < N.length; i++) {
      let min_btn = button.reduce((prev, curr) => {
        if (prev - N[i] * 1 !== Math.min(prev - N[i] * 1, curr - N[i] * 1))
          prev = curr;
        return prev;
      });
      diff.push(min_btn);
      let max_btn = button.reduce((prev, curr) => {
        if (prev - N[i] * 1 !== Math.max(prev - N[i] * 1, curr - N[i] * 1))
          prev = curr;
        return prev;
      });
      diff_max.push(max_btn);
    }
  }

  if (diff.length > 1) diff.pop();
  diff_max[0] = 1 + diff_max[0];

  let min = 500000;
  for (let i = diff.join("") * 1; i <= diff_max.join("") * 1; i++) {
    if (compare_button(input, i)) {
      min = Math.min(
        Math.abs(i * 1 - N.join("") * 1) + i.toString().length,
        min
      );
    }
  }
  console.log(Math.min(result, min));
}

function compare_button(arr, i) {
  i = i.toString().split("");
  for (let j = 0; j < i.length; j++) {
    if (arr.includes(i[j])) return false;
  }
  return true;
}
