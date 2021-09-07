const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; i++) {
    console.log(
      "Case #" +
        (i + 1) +
        ": " +
        testCaseArray[i].A +
        " + " +
        testCaseArray[i].B +
        " = " +
        (testCaseArray[i].A + testCaseArray[i].B)
    );
  }
}
