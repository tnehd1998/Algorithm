function solution(n) {
  let answer = "";
  let share = n;
  let left = 0;
  while (share != 0) {
    left = share % 3;
    share = Math.floor(share / 3);
    if (left === 0) {
      answer = "4" + answer;
      share--;
    } else if (left === 1) {
      answer = "1" + answer;
    } else if (left === 2) {
      answer = "2" + answer;
    }
  }

  return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
console.log(solution(15));
