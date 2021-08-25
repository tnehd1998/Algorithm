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
  });
}

solution(arrayLength, inputArray);

function solution(num, array) {
  for (let i = 0; i < num; i++) {
    let now = array[i].third;
    let floor = array[i].first;
    let count = 1;
    while (true) {
      if (now <= floor) {
        break;
      }
      now -= floor;
      count++;
    }
    console.log(count < 10 ? `${now}0${count}` : `${now}${count}`);
  }
}
