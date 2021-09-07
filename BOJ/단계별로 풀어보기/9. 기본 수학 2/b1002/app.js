const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; ++i) {
  const arr = input[i].split(" ");
  inputArray.push({
    first: +arr[0],
    second: +arr[1],
    third: +arr[2],
    fourth: +arr[3],
    fifth: +arr[4],
    sixth: +arr[5],
  });
}

solution(arrayLength, inputArray);

function solution(num, input) {
  for (let i = 0; i < num; i++) {
    let x1 = input[i].first;
    let y1 = input[i].second;
    let r1 = input[i].third;
    let x2 = input[i].fourth;
    let y2 = input[i].fifth;
    let r2 = input[i].sixth;
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let sum = r1 + r2;
    let sub = Math.abs(r1 - r2);
    if (distance === 0 && sub === 0) {
      console.log(-1);
    } else if (distance > sum || distance < sub) {
      console.log(0);
    } else if (distance === sum || distance === sub) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
