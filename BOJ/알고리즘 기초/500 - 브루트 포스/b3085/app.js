const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", async function () {
  let arr = [];
  let n = input[0] * 1;
  let tmp = new Array(n + 2).fill("X");
  arr.push(tmp);
  input.reduce((acc, cur) => {
    cur = "X" + cur + "X";
    arr.push(cur.split(""));
  });
  arr.push(tmp);
  console.log(candy_swap(n, arr));

  process.exit();
});

let candy_swap = function (n, arr) {
  let max_result = counter(n, arr);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let tmp = arr[i][j];
      arr[i][j] = arr[i - 1][j];
      arr[i - 1][j] = tmp;
      max_result = Math.max(max_result, counter(n, arr));
      arr[i - 1][j] = arr[i][j];
      arr[i][j] = tmp;

      arr[i][j] = arr[i + 1][j];
      arr[i + 1][j] = tmp;
      max_result = Math.max(max_result, counter(n, arr));
      arr[i + 1][j] = arr[i][j];
      arr[i][j] = tmp;

      arr[i][j] = arr[i][j + 1];
      arr[i][j + 1] = tmp;
      max_result = Math.max(max_result, counter(n, arr));
      arr[i][j + 1] = arr[i][j];
      arr[i][j] = tmp;

      arr[i][j] = arr[i][j - 1];
      arr[i][j - 1] = tmp;
      max_result = Math.max(max_result, counter(n, arr));
      arr[i][j - 1] = arr[i][j];
      arr[i][j] = tmp;
    }
  }
  return max_result;
};

let counter = function (n, arr) {
  let max_result = 0;
  for (let i = 1; i <= n; i++) {
    let cnt1 = 1,
      cnt2 = 1,
      max1 = 1,
      max2 = 1;
    let cur1 = arr[0][0],
      cur2 = arr[0][0];
    for (let j = 1; j <= n; j++) {
      if (cur1 == arr[i][j]) {
        cnt1++;
        max1 = Math.max(max1, cnt1);
      } else {
        cur1 = arr[i][j];
        cnt1 = 1;
      }
      if (cur2 == arr[j][i]) {
        cnt2++;
        max2 = Math.max(max2, cnt2);
      } else {
        cur2 = arr[j][i];
        cnt2 = 1;
      }
    }
    max_result = Math.max(max_result, max1, max2);
  }
  return max_result;
};
