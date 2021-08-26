const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input.map((item) => +item);
solution(arrayLength, input);

function solution(arrayLength, input) {
  for (let k = 0; k < arrayLength; k++) {
    let N = input[k];
    let arr = Array(N + 1).fill(true);
    let oddArr = [];
    arr[0] = arr[1] = false;

    for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
      if (arr[i]) {
        let m = 2;
        while (i * m <= N) {
          arr[i * m] = false;
          m++;
        }
      }
    }
    for (let i = 2; i <= N; i++) {
      if (arr[i]) oddArr.push(i);
    }

    let min = N;
    let minNum1 = 0;
    let minNum2 = 0;
    for (let i = 0; i < oddArr.length; i++) {
      for (let j = 0; j < oddArr.length; j++) {
        if (oddArr[i] + oddArr[j] === N) {
          if (Math.abs(oddArr[j] - oddArr[i]) < min) {
            minNum1 = oddArr[i];
            minNum2 = oddArr[j];
            min = Math.abs(oddArr[j] - oddArr[i]);
          }
        }
      }
    }
    console.log(minNum1, minNum2);
  }
}
