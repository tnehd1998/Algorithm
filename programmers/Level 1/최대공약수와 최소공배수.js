function solution(n, m) {
  let num = Number.MIN_SAFE_INTEGER;
  let compareNum = Math.min(n, m);
  for (let i = 1; i <= compareNum; i++) {
    if (n % i === 0 && m % i === 0) {
      num = Math.max(num, i);
    }
  }

  return [num, num * (n / num) * (m / num)];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
