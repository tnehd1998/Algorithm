function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    let current = lost[i];
    if (reserve.includes(current)) {
      for (let j = 0; j < reserve.length; j++) {
        if (current === reserve[j]) {
          lost[i] = -1;
          reserve[j] = -1;
        }
      }
    }
  }

  for (let i = 0; i < lost.length; i++) {
    let current = lost[i];
    if (current > 0) {
      let borrow = false;
      for (let j = 0; j < reserve.length; j++) {
        if (current - 1 === reserve[j] || current + 1 === reserve[j]) {
          borrow = true;
          reserve[j] = -1;
          break;
        }
      }
      if (!borrow) n--;
    }
  }

  return n;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 3, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 2], [3, 5]));
