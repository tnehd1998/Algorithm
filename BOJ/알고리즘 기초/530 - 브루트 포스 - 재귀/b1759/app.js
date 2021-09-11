const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input[0].split(" ").map((item) => +item);
let array = input[1].split(" ").sort();

solution(testCase[0], testCase[1], array);

function solution(L, C, array) {
  let visited = Array(C);
  let output = [];
  let result = "";

  function isWord(output) {
    let vowel = 0;
    let consonant = 0;
    for (let i = 0; i < output.length; i++) {
      if (
        output[i] === "a" ||
        output[i] === "e" ||
        output[i] === "i" ||
        output[i] === "o" ||
        output[i] === "u"
      ) {
        vowel++;
      } else {
        consonant++;
      }
    }
    if (vowel >= 1 && consonant >= 2) {
      return true;
    }
    return false;
  }

  function dfs(idx, cnt) {
    if (cnt === L) {
      if (isWord(output)) result += `${output.join("")}\n`;
      return;
    }
    for (let i = idx; i < C; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(array[i]);
      dfs(i, cnt + 1);
      output.pop();
      visited[i] = false;
    }
  }

  dfs(0, 0);
  console.log(result.trim());
}
