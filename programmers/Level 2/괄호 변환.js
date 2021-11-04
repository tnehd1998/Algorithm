function solution(p) {
  if (p.length === 0) {
    return p;
  }

  let answer = "";
  let leftCount = 0;
  let rightCount = 0;
  let unbalanced = false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") leftCount++;
    if (p[i] === ")") rightCount++;
    if (rightCount > leftCount) {
      unbalanced = true;
    } else if (leftCount === rightCount) {
      if (unbalanced) {
        answer += "(";
        answer += solution(p.slice(i + 1, p.length));
        answer += ")";

        for (let j = 1; j < i; j++) {
          if (p[j] === ")") answer += "(";
          if (p[j] === "(") answer += ")";
        }
        return answer;
      } else {
        answer += p.slice(0, i + 1);
        answer += solution(p.slice(i + 1, p.length));
        return answer;
      }
    }
  }
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
