const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [size, ...arr] = input;
const [height, width] = size.split(" ");
arr = arr.map((item) => item.trim("\r").split(""));

solution(height, width, arr);

function solution(H, W, array) {
  const answer = [];
  const line = ["WBWBWBWB", "BWBWBWBW"];
  for (let i = 0; i <= H - 8; i++) {
    for (let j = 0; j <= W - 8; j++) {
      for (let z = 0; z < 2; z++) {
        let count = 0;
        for (let x = 0; x < 8; x++) {
          for (let y = 0; y < 8; y++) {
            const current = array[i + x][j + y];
            if (current !== line[(x + z) % 2][y]) {
              count++;
            }
          }
        }
        answer.push(count);
      }
    }
  }
  console.log(Math.min.apply(null, answer));
}
