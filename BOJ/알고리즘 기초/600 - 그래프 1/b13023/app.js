const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
testCase = testCase.split(" ").map((item) => +item);

for (let i = 0; i < testCase[1]; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(testCase[0], testCase[1], input);

function solution(N, M, array) {
  let adjArr = Array.from(Array(N), () => Array(0));
  let visited = Array(N).fill(0);
  let flag = 0;
  for (let i = 0; i < M; i++) {
    const [a, b] = array[i];
    adjArr[a].push(b);
    adjArr[b].push(a);
  }
  console.log(adjArr);
  const dfs = (L, cnt) => {
    if (flag) return;
    visited[L] = true;
    if (cnt === 4) {
      flag = 1;
      return;
    }
    for (let i = 0; i < adjArr[L].length; i++) {
      const next = adjArr[L][i];
      if (!visited[next]) {
        dfs(next, cnt + 1);
      }
    }
    visited[L] = false;
  };

  for (let i = 0; i < N; i++) {
    dfs(i, 0);
  }
  console.log(flag);
}
