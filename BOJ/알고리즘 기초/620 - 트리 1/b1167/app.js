const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
for (let i = 0; i < testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}
solution(+testCase, input);

function solution(T, input) {
  const tree = Array.from({ length: T + 1 }, () => Array());
  input.map((str) => {
    const [node, ...nextInfo] = str;
    for (let i = 0; i < nextInfo.length - 1; i += 2) {
      tree[node].push([nextInfo[i], nextInfo[i + 1]]);
    }
  });

  let check = Array.from({ length: T + 1 }, () => 0);
  let max = { node: 0, dist: Number.MIN_SAFE_INTEGER };

  function dfs(node, dist) {
    check[node] = 1;
    if (max.dist < dist) max = { node, dist };
    for (let [nextNode, nextDist] of tree[node]) {
      if (check[nextNode]) continue;
      dfs(nextNode, dist + nextDist);
    }
  }

  dfs(1, 0);
  max.dist = Number.MIN_SAFE_INTEGER;
  check = Array(T + 1).fill(0);

  dfs(max.node, 0);
  console.log(max.dist);
}
