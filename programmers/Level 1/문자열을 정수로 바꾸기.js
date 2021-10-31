function solution(s) {
  return s[0] === "-" ? Number(s.substring(1, s.length)) * -1 : Number(s);
}

console.log(solution("1234"));
console.log(solution("-1234"));
