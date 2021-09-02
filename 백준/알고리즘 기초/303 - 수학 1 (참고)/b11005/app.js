const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(N, B) {
  let result = "";
  let num = parseInt(N, 10).toString(B);
  for (let i = 0; i < num.length; i++) {
    let current = num[i];
    if ("a" <= current && current <= "z") {
      result += current.toUpperCase();
    } else {
      result += current;
    }
  }
  console.log(result);
}
