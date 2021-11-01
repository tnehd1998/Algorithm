function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  }
  return -1;
}

console.log(solution(121));
console.log(solution(3));
