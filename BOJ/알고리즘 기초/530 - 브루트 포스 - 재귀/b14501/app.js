const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input.shift();
for (let i = 0; i < testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(testCase, input);

function solution(T, array) {
  let max = 0;

  function findMax(schedule, start, n, sum) {
    for (let i = start; i < n; i++) {
      if (i + schedule[i][0] <= n)
        findMax(schedule, i + schedule[i][0], n, sum + schedule[i][1]);
      else max = Math.max(max, sum);
    }
    max = Math.max(max, sum);
  }

  findMax(array, 0, T, 0);
  console.log(max);
}
