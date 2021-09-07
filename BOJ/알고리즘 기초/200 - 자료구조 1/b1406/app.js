const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const initialValue = input[0];
const arrayLength = +input[1];
solution(initialValue, arrayLength, input);

function solution(initial, T, input) {
  let result = initial.split("");
  let loc = initial.length;
  for (let i = 2; i < T + 2; i++) {
    let current = input[i];
    if (current.includes("P")) {
      let word = current.split(" ");
      if (!result[loc]) {
        result[loc] = word[1];
        loc++;
      } else {
        for (let j = result.length; j > loc; j--) {
          result[j] = result[j - 1];
        }
        result[loc] = word[1];
        loc++;
      }
    } else if (current === "B") {
      if (loc !== 0) {
        result[loc - 1] = "";
        loc--;
      }
    } else {
      switch (current) {
        case "L":
          if (loc !== 0) loc--;
          break;
        case "D":
          if (loc !== result.length - 1) loc++;
          break;
      }
    }
  }
  console.log(result.join(""));
}
