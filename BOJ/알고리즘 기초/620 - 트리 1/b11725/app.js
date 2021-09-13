const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
for (let i = 0; i < testCase - 1; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}
solution(+testCase, input);

function solution(T, input) {
  const tree = Array.from({ length: T + 1 }, () => Array());
  input.map((val) => {
    const [from, to] = val;
    tree[from].push(to);
    tree[to].push(from);
  });

  let check = Array.from({ length: T + 1 }, () => 0);

  function bfs() {
    const queue = [];
    check[1] = 1;
    for (let next of tree[1]) {
      check[next] = 1;
      queue.push(next);
    }
    while (queue.length) {
      const node = queue.shift();
      for (let next of tree[node]) {
        if (check[next]) continue;
        check[next] = node;
        queue.push(next);
      }
    }
  }
  bfs();
  check = check.slice(2);
  let result = "";
  check.map((v) => (result += `${v}\n`));
  console.log(result.trim());
}
