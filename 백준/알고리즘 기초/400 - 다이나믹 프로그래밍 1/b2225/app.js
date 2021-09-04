const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(N, K) {
  let arr = Array.from(Array(K + 1), () => Array(N + 1));
  for (let i = 0; i <= N; i++) {
    arr[1][i] = 1;
  }
  for (let i = 2; i <= K; i++) {
    for (let j = 0; j <= N; j++) {
      if (j === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = (arr[i][j - 1] + arr[i - 1][j]) % 1000000000;
      }
    }
  }
  console.log(arr[K][N]);
}
