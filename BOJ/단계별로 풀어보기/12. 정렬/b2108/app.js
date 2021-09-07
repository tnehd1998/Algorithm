const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0], input.slice(1));

function solution(T, array) {
  let sortArr = array.map((item) => +item);
  sortArr = sortArr.sort((a, b) => a - b);
  const numMap = {};

  for (let num of sortArr) {
    if (numMap[num]) {
      numMap[num] = numMap[num] + 1;
    } else {
      numMap[num] = 1;
    }
  }

  let hitMaxNum = Math.max.apply(null, Object.values(numMap));
  let hitMaxNumArr = [];
  let hitMaxNumResult = 0;
  for (let numKey in numMap) {
    if (numMap[numKey] === hitMaxNum) {
      hitMaxNumArr.push(numKey);
    }
  }

  if (hitMaxNumArr.length > 1) {
    hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
    hitMaxNumResult = hitMaxNumArr[1];
  } else {
    hitMaxNumResult = hitMaxNumArr[0];
  }

  let sum = Math.round(sortArr.reduce((prev, curr) => prev + curr, 0) / T);
  let center = sortArr[Math.floor(T / 2)];
  let range = sortArr[T - 1] - sortArr[0];

  console.log(sortArr);
  console.log(sum);
  console.log(center);
  console.log(+hitMaxNumResult);
  console.log(range);
}
