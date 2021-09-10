const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input[1] = input[1].split(" ").sort((a, b) => a - b);

solution(input[0], input[1]);

function solution(T, array) {
  let numbers = array;
  let list = [];
  let result = [];
  let check = Array(9).fill(false);

  let max_abs = function () {
    let max = 0;
    result.reduce((acc, cur) => {
      let tmp = cur.split(" ");
      let sum = 0;
      for (let i = 0; i < tmp.length - 1; i++) {
        sum += Math.abs(tmp[i] * 1 - tmp[i + 1] * 1);
      }
      max = Math.max(max, sum);
    }, "");
    console.log(max);
  };

  let re = function (cnt, n, start) {
    if (cnt == n) {
      result.push(list.join(" "));
      return;
    }
    for (let i = start; i < n; i++) {
      if (!check[i]) {
        check[i] = true;
        list[cnt] = numbers[i];
        re(cnt + 1, n, 0);
        check[i] = false;
      }
    }
  };

  re(0, T, 0);
  max_abs();
}
