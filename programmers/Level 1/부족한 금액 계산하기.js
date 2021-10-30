function solution(price, money, count) {
  let answer = money;
  for (let i = 1; i <= count; i++) {
    answer -= price * i;
  }

  return answer >= 0 ? 0 : Math.abs(answer);
}

console.log(solution(3, 20, 4));
