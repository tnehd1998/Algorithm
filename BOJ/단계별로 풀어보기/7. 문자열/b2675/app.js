const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arrayLength = +input[0];
const inputArray = [];
for (let i = 1; i <= arrayLength; ++i) {
  const arr = input[i].split(" ");
  inputArray.push({
    N: +arr[0],
    arr: arr[1],
  });
}

solution(arrayLength, inputArray);

function solution(arrayLength, inputArray) {
  for (let i = 0; i < arrayLength; i++) {
    let newArr = "";
    const count = inputArray[i].N;
    const letter = inputArray[i].arr;
    for (let j = 0; j < letter.length; j++) {
      for (let k = 0; k < count; k++) {
        newArr += letter[j];
      }
    }
    console.log(newArr);
  }
}
