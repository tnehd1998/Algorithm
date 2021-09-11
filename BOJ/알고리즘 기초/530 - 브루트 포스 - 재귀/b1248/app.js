const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input.shift();
input[0] = input[0].split("");

solution(testCase, input[0]);

function solution(T, array) {
  let visited = Array(T + 1);
  let output = [];
  let result = false;
  let check = Array.from(Array(T), () => Array(T).fill(-1));
  let idx = 0;

  for (let i = 0; i < T; i++) {
    for (let j = i; j < T; j++) {
      check[i][j] = array[idx++];
    }
  }

  function checkNum(cnt) {
    let sum = 0;
    for (let i = cnt; i >= 0; i--) {
      sum += output[i];
      if (check[i][cnt] === "+" && sum <= 0) return false;
      if (check[i][cnt] === "-" && sum >= 0) return false;
      if (check[i][cnt] === "0" && sum !== 0) return false;
    }
    return true;
  }

  function dfs(cnt) {
    if (result) return;
    if (cnt === T) {
      let addNum = false;
      for (let i = 1; i <= cnt; i++) {
        addNum = checkNum(cnt - i);
        if (!addNum) break;
      }
      if (addNum) {
        console.log(output.join(" "));
        result = true;
      }
      return;
    }
    for (let i = -10; i <= 10; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(i);
      dfs(cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0);
}
