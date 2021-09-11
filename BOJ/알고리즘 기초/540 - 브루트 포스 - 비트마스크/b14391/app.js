const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
testCase = testCase.split(" ").map((item) => +item);

for (let i = 0; i < testCase[0]; i++) {
  input[i] = input[i].split("").map((item) => +item);
}

solution(testCase[0], testCase[1], input);

function solution(N, M, array) {
  let max = Number.MIN_SAFE_INTEGER;
  let check = Array.from(Array(4), () => Array(4).fill(false));

  function sum_puzzle(n, m) {
    let sum_v = 0;
    let sum_h = 0;
    let tmp_v = "";
    let tmp_h = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= m; j++) {
        if (j < m && !check[i][j]) {
          sum_v += tmp_v * 1;
          tmp_v = "";
        } else if (j < m && check[i][j]) {
          tmp_v = tmp_v + array[i][j];
        } else {
          sum_v += tmp_v * 1;
          tmp_v = "";
        }
      }
    }
    for (let j = 0; j < m; j++) {
      for (let i = 0; i <= n; i++) {
        if (i < n && check[i][j]) {
          sum_h += tmp_h * 1;
          tmp_h = "";
        } else if (i < n && !check[i][j]) {
          tmp_h = tmp_h + array[i][j];
        } else {
          sum_h += tmp_h * 1;
          tmp_h = "";
        }
      }
    }
    return sum_v + sum_h;
  }

  function re_square(n, m, i, j) {
    if (j < m && i < n) {
      check[i][j] = true;
      re_square(n, m, i, j + 1);
      check[i][j] = false;
      re_square(n, m, i, j + 1);
    } else if (i < n - 1) {
      check[i + 1][0] = true;
      re_square(n, m, i + 1, 1);
      check[i + 1][0] = false;
      re_square(n, m, i + 1, 1);
    } else {
      max = Math.max(max, sum_puzzle(n, m));
    }
  }
  re_square(N, M, 0, 0);
  console.log(max);
}
