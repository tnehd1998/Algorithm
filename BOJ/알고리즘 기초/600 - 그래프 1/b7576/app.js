const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
let [N, M] = testCase.split(" ").map((item) => +item);
for (let i = 0; i < M; i++) {
  input[i] = input[i].split(" ").map((item) => +item);
}

solution(N, M, input);

function solution(N, M, arr) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let tomatoCount = N * M;
  let ripeCount = 0;

  let prevRipeList = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === -1) tomatoCount--;
      if (arr[i][j] === 1) {
        prevRipeList.push(`${i} ${j}`);
        ripeCount++;
      }
    }
  }

  let t = 0;
  let newRipeSet = new Set();
  while (true) {
    prevRipeList.forEach((pos) => {
      const [r, c] = pos.split(" ").map((item) => +item);
      dx.forEach((dr, i) => {
        const dc = dy[i],
          nextR = r + dr,
          nextC = c + dc;
        if (
          nextR < 0 ||
          nextR >= M ||
          nextC < 0 ||
          nextC >= N ||
          arr[nextR][nextC] !== 0
        ) {
          return;
        }
        arr[nextR][nextC] = 1;
        newRipeSet.add(`${nextR} ${nextC}`);
      });
    });

    if (newRipeSet.size === 0) {
      break;
    }

    t++;
    ripeCount += newRipeSet.size;
    prevRipeList = Array.from(newRipeSet);
    newRipeSet.clear();
  }
  console.log(ripeCount === tomatoCount ? t : -1);
}
