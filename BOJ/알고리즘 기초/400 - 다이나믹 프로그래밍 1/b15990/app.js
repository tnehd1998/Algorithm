const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input.map((item) => +item);
solution(+arrayLength, input);

function solution(T, input) {
  let num = Math.max(...input);
  let arr = Array.from(Array(num + 1), () => Array(4).fill(0));
  let divider = 1000000009;
  arr[1][1] = arr[2][2] = arr[3][1] = arr[3][2] = arr[3][3] = 1;
  for (let i = 4; i <= num; i++) {
    arr[i][1] = (arr[i - 1][2] + arr[i - 1][3]) % divider;
    arr[i][2] = (arr[i - 2][1] + arr[i - 2][3]) % divider;
    arr[i][3] = (arr[i - 3][1] + arr[i - 3][2]) % divider;
  }
  let result = [];
  for (let i = 0; i < T; i++) {
    result.push(
      (arr[input[i]][1] + arr[input[i]][2] + arr[input[i]][3]) % divider
    );
  }
  console.log(result.join("\n"));
}
