const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = +input[0];
const items = input.slice(1);

solution(num, items);

function solution(num, score) {
  let totalScore = Array(num).fill(0);
  for (let i = 0; i < num; i++) {
    let strScore = 0;
    let count = 0;
    for (let j = 0; j < score[i].length; j++) {
      if (score[i][j] === "O") {
        count++;
        strScore += count;
      } else {
        count = 0;
      }
    }
    totalScore[i] = strScore;
    console.log(totalScore[i]);
  }
}
