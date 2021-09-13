// 실패한 문제
// 순서를 고려하지 않고 모든 BFS를 만족해야 하는데 감이 안옴...

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
for (let i = 0; i < +testCase; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}
let last = input.pop();

solution(+testCase, input, last);

function solution(T, input, last) {
  const adjArr = Array.from({ length: T + 1 }, () => Array());
  input.map((val) => {
    const [from, to] = val;
    adjArr[from].push(to);
    adjArr[to].push(from);
  });

  function bfs(graph, start) {
    let visited = [];
    let needVisit = [];

    needVisit.push(start);

    while (needVisit.length) {
      const node = needVisit.shift();
      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...needVisit, ...graph[node]];
      }
    }
    return visited;
  }
  console.log(bfs(adjArr, 1).join("") === last.join("") ? 1 : 0);
}
