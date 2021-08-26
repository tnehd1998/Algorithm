const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; ++i) {
  const arr = input[i].split(" ");
  inputArray.push({
    x: +arr[0],
    y: +arr[1],
  });
}

solution(arrayLength, inputArray);

function solution(num, array) {
  for (let i = 0; i < num; i++) {
    const x = array[i].x;
    const y = array[i].y;
    let distance = y - x;
    let max = Math.floor(Math.sqrt(distance));
    if (max === Math.sqrt(distance)) {
      console.log(2 * max - 1);
    } else if (distance <= max * max + max) {
      console.log(2 * max);
    } else {
      console.log(2 * max + 1);
    }
  }
}
