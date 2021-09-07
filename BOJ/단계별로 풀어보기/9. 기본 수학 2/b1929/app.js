const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(N, M) {
  let arr = Array(M + 1).fill(true);
  for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= M; j += i) {
        arr[j] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);
  for (let i = N; i <= M; i++) {
    if (arr[i]) console.log(i);
  }
}
