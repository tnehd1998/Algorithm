// 생각한 풀이 방법 (1차 시도 -> 시간 초과)
// 1. 쿼드 트리를 만족하는 경우 해당 값을 answer에 추가한다.
// 2. 만족하지 않는 경우, 해당 범위를 invalidSquare에 추가한다.
// 3. invalidSquare의 모든 값을 처리할 때까지 반복한다.

// function validSquare(startX, endX, startY, endY, squareArr) {
//   for (let i = startX; i < endX; i++) {
//     for (let j = startY; j < endY; j++) {
//       if (squareArr[i][j] !== squareArr[startX][startY]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// function solution(arr) {
//   let answer = [0, 0];
//   let currentRange = arr.length;
//   let invalidSquare = [[0, 0, arr.length, arr.length]];

//   while (invalidSquare.length && currentRange >= 1) {
//     let [startX, startY, endX, endY] = invalidSquare.shift();
//     for (let i = startX; i < endX; i += currentRange) {
//       for (let j = startY; j < endY; j += currentRange) {
//         if (validSquare(i, i + currentRange, j, j + currentRange, arr)) {
//           answer[arr[i][j]]++;
//         } else {
//           invalidSquare.push([i, j, i + currentRange, j + currentRange]);
//         }
//       }
//     }
//     if (endX === arr.length && endY === arr.length) {
//       currentRange /= 2;
//     }
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 조건에 맞는 범위에 따라 재귀함수를 활용한다.
// 2-1. 조건에 만족하는 경우, 해당 값에 맞게 숫자를 증가시킨다.
// 2-2. 해당 조건에 만족하지 않는 경우, 4부분으로 나눠 값이 하나가 될때까지 탐색한다.

function checkSquare(arr, currentRange, answer, startX, startY) {
  let currentValue = arr[startX][startY];
  if (currentRange === 1) {
    // 값이 하나가 될때
    return currentValue ? answer[1]++ : answer[0]++;
  }

  let dividedRange = currentRange / 2;
  let validSquare = true;

  for (let i = startX; i < startX + currentRange; i++) {
    for (let j = startY; j < startY + currentRange; j++) {
      if (currentValue !== arr[i][j]) {
        validSquare = false;
        break;
      }
    }
    if (!validSquare) {
      break;
    }
  }

  if (validSquare) {
    // 조건에 만족하는 경우
    return currentValue ? answer[1]++ : answer[0]++; // 해당 값에 맞게 숫자를 증가
  }

  // 조건에 만족하지 않는 경우
  checkSquare(arr, dividedRange, answer, startX, startY);
  checkSquare(arr, dividedRange, answer, startX, startY + dividedRange);
  checkSquare(arr, dividedRange, answer, startX + dividedRange, startY);
  checkSquare(
    arr,
    dividedRange,
    answer,
    startX + dividedRange,
    startY + dividedRange
  );
}

function solution(arr) {
  let answer = [0, 0];
  let currentRange = arr.length;
  checkSquare(arr, currentRange, answer, 0, 0);

  return answer;
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);
solution([
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]);
solution([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]);
