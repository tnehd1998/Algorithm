function solution(n) {
  let answer = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i]);
  }

  return answer;
}

console.log(solution(123));
console.log(solution(987));
