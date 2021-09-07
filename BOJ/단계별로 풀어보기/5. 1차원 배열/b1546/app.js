const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = +input[0];
const score = input[1].split(" ").map((item) => +item);

solution(num, score);

function solution(num, score) {
  let maxScore = 0;
  let avgScore = 0;
  for (let i = 0; i < num; i++) {
    if (maxScore < score[i]) maxScore = score[i];
  }
  for (let i = 0; i < num; i++) {
    score[i] = (score[i] / maxScore) * 100;
    avgScore += score[i] / num;
  }
  console.log(avgScore);
}
