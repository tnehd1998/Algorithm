const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  let [T, array] = input;
  array = array.split(" ").map((item) => +item);
  let result = [];
  let set = Array.from(new Set([...array])).sort((a, b) => a - b);
  const obj = {};

  set.forEach((item, index) => (obj[item] = index));

  for (let i = 0; i < T; i++) {
    result.push(obj[array[i]]);
  }

  console.log(result.join(" "));
}
