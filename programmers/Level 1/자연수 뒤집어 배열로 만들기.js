function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((item) => +item);
}

console.log(solution(12345));
