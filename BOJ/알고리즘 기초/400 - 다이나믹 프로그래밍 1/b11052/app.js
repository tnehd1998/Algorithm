const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let arrayLength = input.shift();
input = input[0].split(" ").map((item) => +item);
solution(+arrayLength, input);

function solution(T, input) {
  let price = input;
  price.unshift(0);
  let card = [...price];
  for (let i = 1; i <= T; i++) {
    for (let j = 1; j <= input.length; j++) {
      if (i - j > 0 && input[j] + card[i - j] > card[i]) {
        card[i] = input[j] + card[i - j];
      }
    }
  }
  console.log(card[T]);
}
