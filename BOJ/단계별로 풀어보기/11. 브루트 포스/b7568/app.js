const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];

const inputArray = [];
for (let i = 1; i <= arrayLength; ++i) {
  const arr = input[i].split(" ");
  inputArray.push({
    weight: +arr[0],
    height: +arr[1],
  });
}
solution(arrayLength, inputArray);

function solution(T, array) {
  let result = [];
  for (let i = 0; i < T; i++) {
    let counter = 0;
    for (let j = 0; j < T; j++) {
      if (
        array[i].weight < array[j].weight &&
        array[i].height < array[j].height
      ) {
        counter++;
      }
    }
    result.push(counter + 1);
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}
