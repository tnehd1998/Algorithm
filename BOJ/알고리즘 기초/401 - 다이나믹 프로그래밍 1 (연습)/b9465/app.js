const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let testCase = input.shift();
let inputArray = [];
for (let i = 0; i < testCase; i++) {
  let num = +input.shift();
  let first = input
    .shift()
    .split(" ")
    .map((item) => +item);
  let second = input
    .shift()
    .split(" ")
    .map((item) => +item);
  inputArray.push({
    num,
    first,
    second,
  });
}
solution(+testCase, inputArray);

function solution(T, array) {
  for (let i = 0; i < T; i++) {
    let dp = [];
    let num = array[i].num;
    let first = array[i].first;
    let second = array[i].second;
    for (let j = 0; j <= num; j++) {
      dp.push([0, 0]);
    }
    dp[1][0] = array[i].first[0];
    dp[1][1] = array[i].second[0];
    for (let j = 2; j <= num; j++) {
      dp[j][0] = Math.max(dp[j - 1][1], dp[j - 2][1]) + first[j - 1];
      dp[j][1] = Math.max(dp[j - 1][0], dp[j - 2][0]) + second[j - 1];
    }
    console.log(Math.max(...dp[num]));
  }
}
