// 생각한 풀이 방법 (1차 시도 -> 메모리 초과)
// 1. 규칙에 맞는 숫자로 모든 숫자를 탐색한다.
// 2. left, right에 맞는 구간만 짤라서 반환한다.

// function solution(n, left, right) {
//   let answer = [];
//   let arr = Array.from({ length: n }, () => Array(n).fill(n));
//   let count = n - 1;

//   while (count >= 0) {
//     // 규칙에 맞는 숫자로 모든 숫자를 탐색
//     for (let i = 0; i < count; i++) {
//       for (let j = 0; j < count; j++) {
//         arr[i][j] = count;
//       }
//     }
//     count--;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     answer.push(...arr[i]);
//   }

//   return [...answer].slice(left, right + 1); // left, right에 맞는 구간만 짤라서 반환
// }

// 생각한 풀이 방법 (2차 시도 -> 시간 초과)
// 1. left, right 범위에 들어가는 구간만 answer에 저장한다.
// 2. left, right의 시작과 끝값의 차이만큼 shift, pop한 후 반환한다.

// function solution(n, left, right) {
//   let answer = [];
//   let startLeft = 0;
//   let endRight = 0;

//   let addNum = false;

//   for (let i = 1; i <= n; i++) {
//     // left, right 범위에 들어가는 구간만 answer에 저장
//     if (n * (i - 1) <= left && left <= i * n - 1) {
//       startLeft = n * (i - 1);
//       addNum = true;
//     }

//     if (addNum) {
//       let current = [];
//       for (let j = 0; j < i; j++) {
//         current.push(i);
//       }
//       let currentLength = n - current.length;
//       for (let j = 1; j <= currentLength; j++) {
//         current.push(i + j);
//       }
//       answer.push(...current);
//     }

//     if (n * (i - 1) <= right && right <= i * n - 1) {
//       endRight = i * n - 1;
//       break;
//     }
//   }

//   // left, right의 시작과 끝값의 차이만큼 shift, pop한 후 반환
//   for (let i = 0; i < left - startLeft; i++) {
//     answer.shift();
//   }

//   for (let i = 0; i < endRight - right; i++) {
//     answer.pop();
//   }

//   return answer;
// }

// 생각한 풀이 방법 (3차 시도 -> 성공)
// 1. 구간에 맞는 값을 매번 answer에 추가한다.

function solution(n, left, right) {
  let answer = [];

  while (left <= right) {
    answer.push(Math.max(Math.floor(left / n), left++ % n) + 1); // 구간에 맞는 값을 매번 answer에 추가
  }

  return answer;
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
