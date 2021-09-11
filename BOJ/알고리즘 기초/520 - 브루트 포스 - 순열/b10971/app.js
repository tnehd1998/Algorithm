const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input.splice(0, 1);

let array = [];
input.reduce((prev, curr) => {
  array.push(curr.split(" "));
}, "");

solution(+num, array);

function solution(T, array) {
  let min = 987654321;
  let check = Array(10).fill(false);
  let city = [...array];

  let tsp = function (n) {
    for (let i = 0; i < n; i++) {
      re(0, n, i, i, 0);
    }
  };

  let re = function (cnt, n, start, next, sum) {
    if (cnt === n && start === next) {
      min = Math.min(min, sum);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!check[i] && city[next][i] * 1 > 0) {
        check[i] = true;
        if (sum + city[next][i] * 1 < min) {
          re(cnt + 1, n, start, i, sum + city[next][i] * 1);
        }
        check[i] = false;
      }
    }
  };

  tsp(T);
  console.log(min);
}
