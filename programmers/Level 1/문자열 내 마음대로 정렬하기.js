function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    }
    if (b[n] > a[n]) {
      return -1;
    }
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
