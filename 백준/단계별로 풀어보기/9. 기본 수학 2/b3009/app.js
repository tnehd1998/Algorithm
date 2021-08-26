const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  let pointX = [];
  let pointY = [];
  for (let i = 0; i < 3; i++) {
    const arr = input[i].split(" ").map((item) => +item);
    pointX.push(arr[0]);
    pointY.push(arr[1]);
  }
  pointX.sort();
  pointY.sort();

  let x = pointX[0] === pointX[1] ? pointX[2] : pointX[0];
  let y = pointY[0] === pointY[1] ? pointY[2] : pointY[0];
  console.log(`${x} ${y}`);
}
