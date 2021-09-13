const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
let [N, M] = testCase.split(" ").map((item) => +item);
for (let i = 0; i < N; i++) {
  input[i] = input[i].split("").map((item) => +item);
}

solution(N, M, input);

function solution(n, m, arr) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let queue = [];

  queue.push({ x: 0, y: 0 });

  while (queue.length > 0) {
    const element = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = element.x + dx[i];
      const nextY = element.y + dy[i];
      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) {
        continue;
      }
      if (arr[nextX][nextY] !== 1) {
        continue;
      }
      arr[nextX][nextY] = arr[element.x][element.y] + 1;
      queue.push({ x: nextX, y: nextY });
    }
  }
  const answer = arr[n - 1][m - 1];
  console.log(answer);
}
