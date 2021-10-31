function solution(s) {
  if (s.length === 4 || s.length === 6) {
    if (Number(s) && !s.includes("e")) {
      return true;
    }
  }
  return false;
}

console.log(solution("a234"));
console.log(solution("1234"));
