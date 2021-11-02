function solution(s) {
  if (s.length % 2 !== 0) return 0;
  let answer = [];
  let arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === answer[answer.length - 1]) {
      answer.pop();
      continue;
    }
    answer.push(arr[i]);
    if (arr.length - i < answer.length) return 0;
  }
  return 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
