// 생각한 풀이 방법
// 1. 자료구조 Stack을 활용한다.
// 2-1. "("가 나오면 해당 문자를 answer에 push한다.
// 2-2. ")"가 나오면 answer을 pop한다. 만약 answer가 비어있으면 false를 반환
// 3. answer에 문자의 존재 유무에 따라 답을 반환한다.

function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (i === 0 && s[i] === ")") {
      return false;
    }

    let current = s[i];
    switch (current) {
      case "(": // "("가 나오면
        answer.push("("); // 해당 문자를 answer에 push
        break;
      case ")": // ")"가 나오면
        if (answer.length === 0) {
          return false; // answer가 비어있으면 false를 반환
        }
        answer.pop(); // answer을 pop
        break;
    }
  }

  return answer.length ? false : true; // answer에 문자의 존재 유무에 따라 답을 반환
}

console.log(solution("()()"));
console.log(solution("()))()"));
