const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let numbers = input.shift();
numbers = numbers.split(" ").map((item) => +item);
let tetromino = [];
let alpha = new Array(numbers[1] + 4).fill(0);
tetromino.push(alpha);
input.reduce((acc, cur) => {
  tetromino.push(("0 " + cur + " 0 0 0").split(" "));
}, "");
tetromino.push(alpha);
tetromino.push(alpha);
tetromino.push(alpha);
solution(numbers[0], numbers[1], tetromino);

function solution(N, M, t) {
  let max = 0;
  for (i = 1; i <= N; i++) {
    for (j = 1; j <= M; j++) {
      max = Math.max(
        max,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1 + t[i + 3][j] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i][j + 3] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i][j + 1] * 1 + t[i + 1][j + 1] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1 + t[i + 2][j + 1] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1,
        t[i][j] * 1 +
          t[i + 1][j] * 1 +
          t[i + 1][j + 1] * 1 +
          t[i + 1][j + 2] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1 + t[i + 2][j - 1] * 1,
        t[i][j] * 1 +
          t[i][j + 1] * 1 +
          t[i + 1][j + 1] * 1 +
          t[i + 2][j + 1] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i - 1][j + 2] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i + 1][j + 2] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i + 1][j] * 1 + t[i + 2][j] * 1,
        t[i][j] * 1 +
          t[i + 1][j] * 1 +
          t[i + 1][j + 1] * 1 +
          t[i + 2][j + 1] * 1,
        t[i][j] * 1 +
          t[i][j + 1] * 1 +
          t[i - 1][j + 1] * 1 +
          t[i - 1][j + 2] * 1,
        t[i][j] * 1 +
          t[i + 1][j] * 1 +
          t[i + 1][j - 1] * 1 +
          t[i + 2][j - 1] * 1,
        t[i][j] * 1 +
          t[i][j + 1] * 1 +
          t[i + 1][j + 1] * 1 +
          t[i + 1][j + 2] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i - 1][j + 1] * 1 + t[i][j + 2] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j + 1] * 1 + t[i + 2][j] * 1,
        t[i][j] * 1 + t[i][j + 1] * 1 + t[i][j + 2] * 1 + t[i + 1][j + 1] * 1,
        t[i][j] * 1 + t[i + 1][j] * 1 + t[i + 1][j - 1] * 1 + t[i + 2][j] * 1
      );
    }
  }
  console.log(max);
}
