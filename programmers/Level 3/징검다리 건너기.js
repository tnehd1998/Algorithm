// 생각한 풀이 방법 (1차 시도 -> 효율성 실패)
// 1. k만큼 처음부터 모두 탐색을 해 그중 최대 값을 구한다.
// 2. 해당 최대값을 answer와 비교하여 answer보다 작으면 저장한다.

// function solution(stones, k) {
//   let answer = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i <= stones.length - k; i++) { // k만큼 처음부터 모두 탐색
//     let currentValues = [];
//     for (let j = 0; j < k; j++) {
//       currentValues.push(stones[i + j]);
//     }
//     let maxValue = Math.max(...currentValues); // 최대 값을 구한다
//     answer = Math.min(answer, maxValue); // 해당 최대값을 answer와 비교하여 answer보다 작으면 저장
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 이분 탐색을 활용하여 mid번째 사람이 통과할 수 있는지 비교를 한다.
// 1-1. 통과할 수 있다면 left값을 mid로 바꾼다.
// 1-2. 통과할 수 없다면 right값을 mid로 바꾼다.
// 2. left값이 right-1보다 작을때까지 탐색한다.

function checkStone(stones, mid, k) {
  // 이분 탐색을 활용
  let current = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] < mid) {
      current += 1;
    } else {
      current = 0;
    }

    if (current >= k) {
      return false;
    }
  }

  return true;
}

function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  while (left < right - 1) {
    // left값이 right-1보다 작을때까지 탐색
    const mid = Math.floor((left + right) / 2);
    if (checkStone(stones, mid, k)) {
      //  mid번째 사람이 통과할 수 있는지 비교
      left = mid; // 통과할 수 있다면 left값을 mid
    } else {
      right = mid; // 통과할 수 없다면 right값을 mid
    }
  }

  return left;
}

solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3);
