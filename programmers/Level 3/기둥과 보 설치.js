// 생각한 풀이 방법 (1차 시도 -> 실패)
// 1. 구현 요구 사항에 따라 조건을 구현한다.
// 2. 해당 하는 기둥과 보의 위치를 반환한다.

// function solution(n, build_frame) {
//   let answer = [];

//   let paperArr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
//   let pillarArr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

//   for (let i = 0; i < build_frame.length; i++) {
//     let [pointY, pointX, isPaper, isAdding] = build_frame[i];
//     if (isAdding) {
//       if (isPaper) {
//         if (
//           pointX !== 0 &&
//           (pillarArr[pointX - 1][pointY] ||
//             pillarArr[pointX - 1][pointY + 1] ||
//             (paperArr[pointX][pointY + 1] && paperArr[pointX][pointY - 1]))
//         ) {
//           paperArr[pointX][pointY] = 1;
//         }
//       } else {
//         if (
//           pointX === 0 ||
//           (pointX !== 0 &&
//             (pillarArr[pointX - 1][pointY] ||
//               paperArr[pointX][pointY - 1] ||
//               paperArr[pointX][pointY]))
//         )
//           pillarArr[pointX][pointY] = 1;
//       }
//     } else {
//       if (isPaper) {
//         if (
//           !pillarArr[pointX - 1][pointY] &&
//           !pillarArr[pointX - 1][pointY + 1] &&
//           (!paperArr[pointX][pointY + 1] || !paperArr[pointX][pointY - 1])
//         ) {
//           paperArr[pointX][pointY] = 0;
//         }
//       } else {
//         if (
//           (pointX === 0 &&
//             (!pillarArr[pointX + 1][pointY] ||
//               !pillarArr[pointX + 1][pointY - 1])) ||
//           (!pillarArr[pointX - 1][pointY] &&
//             !paperArr[pointX][pointY - 1] &&
//             !paperArr[pointX][pointY])
//         )
//           pillarArr[pointX][pointY] = 0;
//       }
//     }
//   }

//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) {
//       if (paperArr[i][j]) {
//         answer.push([j, i, 1]);
//       }
//       if (pillarArr[i][j]) {
//         answer.push([j, i, 0]);
//       }
//     }
//   }

//   answer.sort((a, b) => {
//     if (a[0] === b[0]) {
//       if (a[1] === b[1]) {
//         return a[2] - b[2];
//       }
//       return a[1] - b[1];
//     }
//     return a[0] - b[0];
//   });

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 구현 요구 사항에 따라 조건을 구현한다.
// 2. 해당하는 조건을 함수로 나눠, 스스로 구현을 하다 헷갈리는 상황을 방지한다.

function checkFloor(answer, x, y) {
  if (
    answer.find(([a, b, c]) => a === x && b === y - 1 && c === 0) !== undefined
  ) {
    return true;
  }
  if (
    answer.find(([a, b, c]) => a === x + 1 && b === y - 1 && c === 0) !==
    undefined
  ) {
    return true;
  }
  if (
    answer.find(([a, b, c]) => a === x - 1 && b === y && c === 1) &&
    answer.find(([a, b, c]) => a === x + 1 && b === y && c === 1)
  ) {
    return true;
  }

  return false;
}

function checkCol(answer, x, y) {
  if (y === 0) {
    return true;
  }
  if (
    answer.find(([a, b, c]) => a === x && b === y - 1 && c === 0) !== undefined
  ) {
    return true;
  }
  if (
    answer.find(([a, b, c]) => a === x - 1 && b === y && c === 1) !== undefined
  ) {
    return true;
  }
  if (answer.find(([a, b, c]) => a === x && b === y && c === 1) !== undefined) {
    return true;
  }

  return false;
}

function makeFloor(answer, x, y) {
  if (checkFloor(answer, x, y)) {
    answer.push([x, y, 1]);
  }
}

function destroyFloor(answer, x, y) {
  let copyArr = [...answer];
  const index = copyArr.findIndex(([a, b, c]) => a === x && b === y && c === 1);
  copyArr.splice(index, 1);

  for (let i = 0; i < copyArr.length; i++) {
    let [a, b, isAdding] = copyArr[i];
    if (!isAdding) {
      if (!checkCol(copyArr, a, b)) {
        return false;
      }
    } else {
      if (!checkFloor(copyArr, a, b)) {
        return false;
      }
    }
  }

  return answer.splice(index, 1);
}

function makeCol(answer, x, y) {
  if (checkCol(answer, x, y)) {
    answer.push([x, y, 0]);
  }
}

function destroyCol(answer, x, y) {
  let copyArr = [...answer];
  const index = copyArr.findIndex(([a, b, c]) => a === x && b === y && c === 0);
  copyArr.splice(index, 1);

  for (let i = 0; i < copyArr.length; i++) {
    let [a, b, isAdding] = copyArr[i];
    if (!isAdding) {
      if (!checkCol(copyArr, a, b)) {
        return false;
      }
    } else {
      if (!checkFloor(copyArr, a, b)) {
        return false;
      }
    }
  }

  return answer.splice(index, 1);
}

function solution(n, build_frame) {
  let answer = [];

  for (let i = 0; i < build_frame.length; i++) {
    let [x, y, isPaper, isAdding] = build_frame[i];

    if (isPaper && isAdding) {
      makeFloor(answer, x, y);
    } else if (isPaper && !isAdding) {
      destroyFloor(answer, x, y);
    } else if (!isPaper && isAdding) {
      makeCol(answer, x, y);
    } else if (!isPaper && !isAdding) {
      destroyCol(answer, x, y);
    }
  }

  return answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
}

console.log(
  solution(5, [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ])
);
console.log(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ])
);
