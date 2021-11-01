function solution(s) {
  if (s.length === 1) return 1;
  let answer = [];
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let count = 1;
    let string = "";
    for (let j = 0; j < s.length; j += i) {
      let current = s.substr(j, i);
      let next = s.substr(j + i, i);
      if (current === next) {
        count++;
      } else {
        string = count > 1 ? string + count + current : string + current;
        count = 1;
      }
    }
    answer.push(string.length);
  }
  return Math.min(...answer);
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
