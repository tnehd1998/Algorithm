const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();

solution(+testCase, input);

function solution(T, input) {
  const tree = Array.from({ length: T + 1 }, () => Array());
  const findRoot = Array.from({ length: T + 1 }, () => 0);
  input.map((str) => {
    const [from, ...nextInfo] = str.split(" ").map((item) => +item);
    findRoot[from]++;
    for (let to of nextInfo) {
      tree[from].push(to);
      findRoot[to]++;
    }
  });

  const rootNode = findRoot.indexOf(1);
  const rows = Array.from({ length: T + 1 }, () => Array());

  let column = 1;

  function dfs(L, node) {
    const [left, right] = tree[node];
    if (left !== -1) dfs(L + 1, left);
    rows[L].push(column++);
    if (right !== -1) dfs(L + 1, right);
  }
  dfs(1, rootNode);

  let max = [0, 0];
  rows.map((row, level) => {
    if (!row.length) return;
    const width = Math.max(...row) - Math.min(...row) + 1;
    if (width > max[1]) max = [level, width];
  });

  console.log(max.join(" "));
}
