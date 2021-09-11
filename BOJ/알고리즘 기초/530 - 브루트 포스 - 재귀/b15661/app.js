const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input.shift();
for (let i = 0; i < testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(testCase, input);

function solution(T, array) {
  const check = new Array(T).fill(false);
  let min = Number.MAX_SAFE_INTEGER;
  function dfs(L, K) {
    if (L > 0 && T - L > 0) {
      const sTeam = [];
      const lTeam = [];
      let sSum = (lSum = 0);
      for (let i = 0; i < T; i++) {
        if (check[i]) sTeam.push(i);
        else lTeam.push(i);
      }
      for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
          sSum = sSum + array[sTeam[i]][sTeam[j]];
        }
      }
      for (let i = 0; i < T - L; i++) {
        for (let j = 0; j < T - L; j++) {
          lSum = lSum + array[lTeam[i]][lTeam[j]];
        }
      }
      min = Math.min(min, Math.abs(sSum - lSum));
    }

    for (let i = K; i < T; i++) {
      check[i] = true;
      dfs(L + 1, i + 1);
      check[i] = false;
    }
  }
  dfs(0, 0);
  console.log(min);
}
