const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "") continue;
    let current = input[i];
    let arr = Array(4).fill(0);
    for (let j = 0; j < current.length; j++) {
      if ("A" <= current[j] && current[j] <= "Z") {
        arr[1]++;
      } else if ("a" <= current[j] && current[j] <= "z") {
        arr[0]++;
      } else if ("0" <= current[j] && current[j] <= "9") {
        arr[2]++;
      } else if (current[j] === " ") {
        arr[3]++;
      }
    }
    console.log(arr.join(" "));
  }
}
