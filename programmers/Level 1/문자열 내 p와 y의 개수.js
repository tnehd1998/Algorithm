function solution(s) {
  let answer = 0;
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      answer++;
    }
    if (s[i] === "y") {
      answer--;
    }
  }

  return answer === 0 ? true : false;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
