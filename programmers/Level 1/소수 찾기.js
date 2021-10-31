function solution(n) {
  let initial = [];
  for (let i = 0; i < n + 1; i++) {
    initial.push(true);
  }
  for (let i = 2; i * i <= n; i++) {
    if (initial[i]) {
      for (let j = i * i; j <= n; j += i) {
        initial[j] = false;
      }
    }
  }
  initial.splice(0, 2, false, false);
  let result = initial.filter((item) => item !== false);

  return result.length;
}

console.log(solution(10));
console.log(solution(5));
