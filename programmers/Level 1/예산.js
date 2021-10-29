function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      count++;
      budget -= d[i];
    }
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
