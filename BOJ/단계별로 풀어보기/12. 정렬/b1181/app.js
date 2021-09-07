const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

solution(input);

function solution(array) {
  let sortedArray = array.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  const uniqueValue = new Set(sortedArray);
  console.log(Array.from(uniqueValue).join("\n"));
}
