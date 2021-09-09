const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input.shift();
for (let i = 0; i < testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}
solution(testCase, input);

function solution(T, input) {
  for (let i = 0; i < T; i++) {
    let M = input[i][0];
    let N = input[i][1];
    let x = input[i][2];
    let y = input[i][3];
    let startX = 0;
    let startY = 0;
    let count = -1;
    let gcd = 0;
    gcd = gdc(N, M);
    while (startX <= N / gcd && startY <= M / gcd) {
      if (x === y) {
        count = x;
        break;
      } else if (x > y) {
        y = y + N;
        startY++;
      } else {
        x = x + M;
        startX++;
      }
    }
    console.log(count);
  }
}

function gdc(a, b) {
  return b ? gdc(b, a % b) : a;
}
