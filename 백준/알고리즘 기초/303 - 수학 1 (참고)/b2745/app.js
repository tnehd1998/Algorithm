const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ");

solution(input[0], +input[1]);

function solution(N, B) {
  let result = 0;
  for (let i = 0; i < N.length; i++) {
    let current = N[i];
    if ("A" <= current && current <= "Z") {
      result += (current.charCodeAt() - 65 + 10) * B ** (N.length - i - 1);
    } else {
      result += +current * B ** (N.length - i - 1);
    }
  }
  console.log(result);
}
