const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0], input.slice(1));

function solution(N, arr) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let word = arr[i];
    let obj = {};
    let currentWord = word[0];
    let valid = true;
    obj[currentWord] = true;
    for (let j = 1; j < word.length; j++) {
      if (currentWord !== word[j]) {
        if (obj[word[j]]) {
          valid = false;
        } else {
          currentWord = word[j];
          obj[word[j]] = true;
        }
      }
    }
    if (valid) count++;
  }
  console.log(count);
}
