// 생각한 풀이 방법
// 1. 체육복을 잃어버린 학생 중 스스로 여분을 가져온 학생을 먼저 걸러냄
// 2. 체육복을 잃어버린 학생에게 여분의 체육복을 빌려줌
// 3. 체육복을 못빌린 학생이 나오면 들을수 있는 학생의 수를 감소시킴

function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 체육복을 잃어버린 학생 중 스스로 여분을 가져온 학생을 먼저 걸러냄
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

  // 체육복을 잃어버린 학생에게 여분의 체육복을 빌려줌
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
      // 체육복을 못빌린 학생이 나오면 들을수 있는 학생의 수를 감소시킴
    }
  }

  return n;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 3, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 2], [3, 5]));
