// 생각한 풀이 방법
// 1. 내림차순으로 모든 문자열을 탐색한다.
// 2. 탐색을 하다 해당 부분문자열이 팬린드롬을 만족하면 해당 값의 길이를 반환한다.

function validString(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function solution(s) {
  let count = s.length;
  while (count > 0) {
    for (let i = 0; i <= s.length - count; i++) {
      // 내림차순으로 모든 문자열을 탐색
      let current = s.substring(i, count + i);
      if (validString(current)) {
        // 팬린드롬을 만족
        return current.length; // 해당 값의 길이를 반환
      }
    }
    count--;
  }
}

console.log(solution("abcdcba"));
console.log(solution("abacde"));
console.log(solution("bb"));
