const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);
input.pop();
solution(input);

function solution(input) {
  for (let k = 0; k < input.length; k++) {
    let N = input[k];
    let M = N * 2;
    let arr = Array(M + 1).fill(true);
    arr[0] = arr[1] = false;
    let count = 0;
    for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++) {
      if (arr[i]) {
        let m = 2;
        while (i * m <= M) {
          arr[i * m] = false;
          m++;
        }
      }
    }
    for (let i = N + 1; i <= M; i++) {
      if (arr[i]) count++;
    }
    console.log(count);
  }
}
