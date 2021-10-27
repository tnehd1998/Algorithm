function solution(lottos, win_nums) {
  var answer = [];
  let zeroNum = lottos.filter((num) => num === 0).length;
  let count = 0;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) count++;
    }
  }

  let max = count + zeroNum;
  let min = count;

  if (max === 0) {
    answer.push(6);
  } else {
    answer.push(7 - max);
  }

  if (min <= 1) {
    answer.push(6);
  } else {
    answer.push(7 - min);
  }

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
