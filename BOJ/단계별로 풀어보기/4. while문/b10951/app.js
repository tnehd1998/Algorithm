const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 0; ; ++i) {
  if (!input[i]) {
    break;
  }
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(testCaseArray);

function solution(testCaseArray) {
  let i = 0;
  while (i !== testCaseArray.length) {
    A = testCaseArray[i].A;
    B = testCaseArray[i].B;
    console.log(A + B);
    i++;
  }
  return;
}
