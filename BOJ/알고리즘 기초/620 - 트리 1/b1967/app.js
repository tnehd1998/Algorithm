const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  const N = +input[0];
  input = input.slice(1);
  const tree = Array.from({ length: N + 1 }, () => Array());
  input.map((str) => {
    const [from, to, dist] = str.split(" ").map(Number);
    tree[from].push([to, dist]);
    tree[to].push([from, dist]);
  });
  tree.sort((a, b) => a[0] - b[0]);

  function bfs(s) {
    const check = Array(N + 1).fill(0);
    const queue = [];
    queue.push([s, 0]);
    let max = { node: 0, dist: 0 };
    while (queue.length) {
      const [node, dist] = queue.shift();
      if (check[node]) continue;
      check[node] = 1;
      if (max.dist < dist) max = { node, dist };
      for (let [nextNode, nextDist] of tree[node]) {
        queue.push([nextNode, dist + nextDist]);
      }
    }
    return max;
  }

  console.log(bfs(bfs(1).node).dist);
}
