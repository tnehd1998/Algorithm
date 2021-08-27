const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input[0] = input[0].split(" ");
let cards = input[1].split(" ").map((item) => +item);

solution(+input[0][0], +input[0][1], cards);

function solution(N, M, cards) {
  let closest = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum > closest && sum <= M) {
          closest = sum;
        }
      }
    }
  }
  console.log(closest);
}
