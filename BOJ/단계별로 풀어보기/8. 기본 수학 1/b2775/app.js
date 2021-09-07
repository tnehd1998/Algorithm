const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = +input.shift();

for (let i = 0; i < num; i++) {
  let k = +input.shift();
  let n = +input.shift();
  let house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  for (let j = 0; j <= n; j++) {
    house[0][j] = j;
  }
  for (let j = 1; j <= k; j++) {
    for (let l = 1; l <= n; l++) {
      house[j][l] = house[j - 1][l] + house[j][l - 1];
    }
  }
  console.log(house[k][n]);
}
