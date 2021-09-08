const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", async function () {
  input = input[0].split(" ").map((item) => +item);
  solution(input[0], input[1], input[2]);

  process.exit();
});

function solution(E, S, M) {
  let count = 0;
  while (true) {
    if (count % 15 === E - 1 && count % 28 === S - 1 && count % 19 === M - 1)
      break;
    count++;
  }
  console.log(count + 1);
}
