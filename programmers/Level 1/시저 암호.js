function solution(s, n) {
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "") {
      let current = s[i].charCodeAt(0);
      if (65 <= current && current <= 90) {
        if (current + n > 90) {
          current = ((current + n) % 91) + 65;
        } else {
          current = (current + n) % 91;
        }
      } else if (97 <= current && current <= 122) {
        if (current + n > 122) {
          current = ((current + n) % 123) + 97;
        } else {
          current = (current + n) % 123;
        }
      }
      s[i] = String.fromCharCode(current);
    }
  }

  return s.join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
console.log(solution("AaZz", 25));
