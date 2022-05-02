// 생각한 풀이 방법 (1차 시도 -> 효율성 실패)
// 1. 조건에 맞게 그대로 구현한다.

// function solution(board, skill) {
//   let answer = 0;

//   for (let i = 0; i < skill.length; i++) {
//     let current = skill[i];
//     let attack = current[0] === 1 ? true : false;
//     let value = current[5];
//     for (let j = current[1]; j <= current[3]; j++) {
//       for (let k = current[2]; k <= current[4]; k++) {
//         if (attack) {
//           board[j][k] -= value;
//         } else {
//           board[j][k] += value;
//         }
//       }
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] > 0) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 밑과 옆으로 board보다 1을 증가시킨 배열을 생성한다.
// 2. skill에 맞게 해당 좌표에 만족하는 값 중 arr (x1, y1)과 (x2+1,y2+1)에 해당 값을 조건에 만족하는 값을 더한다.
// 3. arr의 (x2+1,y1), (x1,y2+1)에 만족하는 부분을 attack * -1 만큼 더한다.
// 4. 모든 skill을 탐색한 후, 해당 값을 누적하여 위에서 아래로 더한다.
// 5. 위에서 아래로 더한 후, 해당 값을 누적하여 왼쪽에서 오른쪽으로 더한다.
// 6. board에 해당 배열인 arr을 더해 최종 배열을 구한다.
// 7. 해당 값 중 0보다 큰 위치의 수를 더해 answer을 반환한다.

// function solution(board, skill) {
//   let answer = 0;
//   let arr = Array.from({ length: board.length + 1 }, () =>
//     Array(board[0].length + 1).fill(0)
//   ); // 밑과 옆으로 board보다 1을 증가시킨 배열을 생성

//   for (let i = 0; i < skill.length; i++) {
//     let current = skill[i];
//     let attack = current[0] === 1 ? -1 : 1;
//     arr[current[1]][current[2]] += current[5] * attack; // (x1, y1)
//     arr[current[3] + 1][current[2]] += current[5] * attack * -1; // (x2+1,y1)
//     arr[current[1]][current[4] + 1] += current[5] * attack * -1; // (x1,y2+1)
//     arr[current[3] + 1][current[4] + 1] += current[5] * attack; // (x2+1,y2+1)
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       arr[i + 1][j] += arr[i][j]; // 해당 값을 누적하여 위에서 아래로 더한다
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       arr[i][j + 1] += arr[i][j]; // 해당 값을 누적하여 왼쪽에서 오른쪽으로 더한다
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       board[i][j] += arr[i][j]; // board에 해당 배열인 arr을 더해 최종 배열
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] > 0) {
//         answer++; // 해당 값 중 0보다 큰 위치의 수
//       }
//     }
//   }

//   return answer;
// }

// function solution(board, skill) {
//   let answer = 0;

//   for (let i = 0; i < skill.length; i++) {
//     let current = skill[i];
//     if (current[0] === 1) {
//       for (let j = current[1]; j <= current[3]; j++) {
//         for (let k = current[2]; k <= current[4]; k++) {
//           board[j][k] -= current[5];
//         }
//       }
//     } else {
//       for (let j = current[1]; j <= current[3]; j++) {
//         for (let k = current[2]; k <= current[4]; k++) {
//           board[j][k] += current[5];
//         }
//       }
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] > 0) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }

function solution(board, skill) {
  let answer = 0;
  let arr = Array.from({ length: board.length + 1 }, () =>
    Array(board[0].length + 1).fill(0)
  );

  for (let i = 0; i < skill.length; i++) {
    let [type, startX, startY, endX, endY, amount] = skill[i];
    let isAttack = type === 1 ? -1 : 1;
    arr[startX][startY] += isAttack * amount;
    arr[endX + 1][startY] -= isAttack * amount;
    arr[startX][endY + 1] -= isAttack * amount;
    arr[endX + 1][endY + 1] += isAttack * amount;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      arr[i + 1][j] += arr[i][j];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      arr[i][j + 1] += arr[i][j];
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      arr[i][j] += board[i][j];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[0].length - 1; j++) {
      if (arr[i][j] > 0) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
);
