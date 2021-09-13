const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
for (let i = 0; i < +testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(+testCase, input);

function solution(T, input) {
  const adjArr = Array.from({ length: T + 1 }, () => Array());
  input.map((val) => {
    const [from, to] = val;
    adjArr[from].push(to);
    adjArr[to].push(from);
  });
  const check = new Array(T + 1).fill(0);
  let flag = 0;
  let cycle;
  let start;

  function dfs(L, index) {
    if (flag) return;
    for (let x of adjArr[index]) {
      if (!check[x]) {
        check[x] = true;
        dfs(L + 1, x);
        check[x] = false;
      } else if (L >= 3 && x === start) {
        flag = 1;
        cycle = check.slice();
        return;
      }
    }
  }

  for (let i = 1; i <= T; i++) {
    start = i;
    check[i] = true;
    dfs(1, i);
    check[i] = false;
    if (flag) break;
  }

  function bfs(i) {
    const queue = [];
    queue.push(i);
    let dist = 0;
    const check2 = Array(T + 1).fill(0);
    check2[i] = 1;
    while (true) {
      dist++;
      const iterator = queue.length;
      for (let i = 0; i < iterator; i++) {
        const from = queue.shift();
        for (let to of adjArr[from]) {
          if (cycle[to]) {
            return dist;
          }
          if (!check2[to]) {
            check2[to] = 1;
            queue.push(to);
          }
        }
      }
    }
  }

  let result = [];
  for (let i = 1; i <= T; i++) {
    if (cycle[i]) {
      result.push(0);
      continue;
    }
    result.push(bfs(i));
  }
  console.log(result.join(" "));
}
