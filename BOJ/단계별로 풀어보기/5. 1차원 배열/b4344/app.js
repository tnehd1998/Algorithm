const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; ++i) {
  const arr = input[i].split(" ");
  inputArray.push({
    N: +arr[0],
    arr: arr.slice(1).map((item) => +item),
  });
}

solution(arrayLength, inputArray);

function solution(C, inputArray) {
  for (let i = 0; i < C; i++) {
    let item = inputArray[i];
    let avgScore = 0;
    let overAvg = 0;
    for (let j = 0; j < item.N; j++) {
      avgScore += item.arr[j];
    }
    avgScore /= item.N;

    for (let j = 0; j < item.N; j++) {
      if (item.arr[j] > avgScore) overAvg++;
    }
    let answer = overAvg / item.N;
    console.log((answer * 100).toFixed(3) + "%");
  }
}
