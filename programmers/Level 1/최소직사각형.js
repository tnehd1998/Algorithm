function solution(sizes) {
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }
  for (let i = 0; i < sizes.length; i++) {
    max1 = Math.max(max1, sizes[i][0]);
    max2 = Math.max(max2, sizes[i][1]);
  }

  return max1 * max2;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
