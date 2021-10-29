function solution(n) {
  return Number(parseInt([...n.toString(3)].reverse().join(""), 3));
}

console.log(solution(45));
console.log(solution(125));
