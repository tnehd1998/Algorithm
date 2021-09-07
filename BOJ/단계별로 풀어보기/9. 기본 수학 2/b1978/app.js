const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 0; i < arrayLength; ++i) {
  const arr = input[1].split(" ");
  inputArray.push({
    num: +arr[i],
  });
}

solution(arrayLength, inputArray);

function solution(num, array) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    let current = array[i].num;
    for (let j = 2; j <= current; j++) {
      if (j === current) {
        count++;
      } else if (current % j === 0) {
        break;
      }
    }
  }
  console.log(count);
}
