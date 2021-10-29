function solution(N, stages) {
  let answer = [];
  let failArr = [];
  for (let i = 1; i <= N; i++) {
    let total = 0;
    let failed = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) {
        if (stages[j] === i) {
          failed++;
        }
        total++;
      }
    }
    if (total === 0) {
      failArr.push(-1);
    } else {
      failArr.push(failed / total);
    }
  }
  let sortedArr = [...failArr].sort((a, b) => b - a);
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < failArr.length; j++) {
      if (sortedArr[i] === failArr[j]) {
        answer.push(j + 1);
        failArr[j] = -2;
      }
    }
  }
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
console.log(solution(5, [1, 2, 2, 1, 3]));
