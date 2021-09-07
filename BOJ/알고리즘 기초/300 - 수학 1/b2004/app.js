const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function findFive(num) {
  let count = 0;
  for (let i = 5; i <= num; i *= 5) {
    count += Math.floor(num / i);
  }
  return count;
}

function findTwo(num) {
  let count = 0;
  for (let i = 2; i <= num; i *= 2) {
    count += Math.floor(num / i);
  }
  return count;
}

function solution(n, m) {
  console.log(
    Math.min(
      findFive(n) - (findFive(m) + findFive(n - m)),
      findTwo(n) - (findTwo(m) + findTwo(n - m))
    )
  );
}
