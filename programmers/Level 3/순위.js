// 생각한 풀이 방법 (1차 시도 -> 실패)
// 1. n크기의 이차원 배열을 만들어 results 결과에 따라 승부가 되었음을 표시한다.
// 2. 모든 results를 확인한 후, 노드 중 가장 승부를 많이한 노드들을 선별한다.
// 3. 가장 많이 승부한 노드를 기준으로 해당 노드를 이기거나 진 노드를 선별한다.
// 4. 기준 노드를 이긴 노드는 기준노드에게 진 노드 보다 우선순위가 위이기 때문에 해당 경우를 다시 추가한다.
// 5. 노드 중 승부 횟수가 n-1인 경우 answer를 증가시킨다.

// function solution(n, results) {
//   let answer = 0;
//   let arr = Array.from(Array(n), () => new Array(n).fill(false));
//   let maxValue = 0;

//   let allJoined = true;

//   for (let i = 0; i < results.length - 1; i++) {
//     if (results[i][1] !== results[i + 1][0]) {
//       allJoined = false;
//     }
//   }

//   if (allJoined) return n;

//   for (let i = 0; i < results.length; i++) {
//     let current = results[i];
//     arr[current[0] - 1][current[1] - 1] = true;
//     arr[current[1] - 1][current[0] - 1] = true;
//   }

//   for (let i = 0; i < n; i++) {
//     let current = arr[i];
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (current[j]) {
//         count++;
//       }
//     }
//     maxValue = Math.max(maxValue, count);
//   }

//   for (let i = 0; i < n; i++) {
//     let current = arr[i];
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (current[j]) {
//         count++;
//       }
//     }

//     if (count === maxValue) {
//       let frontTarget = [];
//       let backTarget = [];
//       for (let j = 0; j < results.length; j++) {
//         if (results[j][0] === i + 1) {
//           backTarget.push(results[j][1]);
//         }
//         if (results[j][1] === i + 1) {
//           frontTarget.push(results[j][0]);
//         }
//       }

//       for (let j = 0; j < backTarget.length; j++) {
//         for (let k = 0; k < frontTarget.length; k++) {
//           arr[backTarget[j] - 1][frontTarget[k] - 1] = true;
//           arr[frontTarget[k] - 1][backTarget[j] - 1] = true;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     let count = 0;
//     for (let j = 0; j < current.length; j++) {
//       if (current[j]) {
//         count++;
//       }
//     }
//     if (count === n - 1) {
//       answer++;
//     }
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 1차 시도와 방법은 같으나 불필요한 계산을 최소화했다.

function solution(n, results) {
  let answer = 0;
  let arr = Array.from(Array(n + 1), () => new Array(n + 1).fill(false));

  for (let i = 0; i < results.length; i++) {
    let current = results[i];
    arr[current[0]][current[1]] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (arr[j][i] && arr[i][k]) {
          arr[j][k] = true;
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (arr[i][j] || arr[j][i]) {
        count++;
      }
    }
    if (count === n - 1) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);

console.log(
  solution(5, [
    [3, 5],
    [4, 2],
    [4, 5],
    [5, 1],
    [5, 2],
  ])
);

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [1, 4],
  ])
);

console.log(
  solution(5, [
    [1, 4],
    [4, 2],
    [2, 5],
    [5, 3],
  ])
);

console.log(
  solution(6, [
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
  ])
);

console.log(
  solution(3, [
    [1, 2],
    [1, 3],
  ])
);

console.log(
  solution(5, [
    [3, 5],
    [4, 2],
    [4, 5],
    [5, 1],
    [5, 2],
  ])
);
