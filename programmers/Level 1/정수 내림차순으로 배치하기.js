function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((item) => +item)
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(solution(118372));
