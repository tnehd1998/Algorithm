function d(number) {
  let sum = 0;
  const strNum = String(number);
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return number + sum;
}

function solution() {
  const arr = Array(10001).fill(0);
  for (let i = 1; i <= 10000; i++) {
    const ans = d(i);
    arr[ans]++;
  }
  for (let i = 1; i <= 10000; i++) {
    if (arr[i] === 0) console.log(i);
  }
}

solution();
