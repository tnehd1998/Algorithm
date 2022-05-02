// 생각한 풀이 방법
// 1. 0포인트 부터 나올수 있는 모든 경우를 탐색한다
// 1-1. 라이언이 이겨 포인트를 얻는 경우
// 1-2. 어피치가 이겨 포인트를 얻는 경우
// 1-3. 둘다 점수를 얻지 못하는 경우
// 2. 10포인트까지 모든 경우를 탐색한 후, 해당 경우의 포인트 차이가 maxCount보다 큰 경우,
// 해당 포인트 차이를 maxCount에 저장하고, 해당 경우를 answer에 저장한다.

// function solution(n, info) {
//   let answer = Array(11).fill(0);
//   let maxCount = 0;

//   function findMaxPoint(apeachCount, ryanCount, usedShots, point, arr) {
//     if (n < usedShots) return; // 사용한 화살의 수가 전체 화살수 보다 큰 경우

//     if (point > 10) {
//       // 10포인트까지 모든 경우를 탐색한 경우
//       let diff = ryanCount - apeachCount;
//       if (maxCount < diff) {
//         // 포인트 차이가 maxCount보다 큰 경우
//         arr[10] = n - usedShots;
//         maxCount = diff; // 해당 포인트 차이를 maxCount에 저장
//         answer = arr; // 해당 경우를 answer에 저장
//       }
//       return;
//     }

//     if (n > usedShots) {
//       // 라이언이 이겨 포인트를 얻는 경우
//       let current = [...arr];
//       current[10 - point] = info[10 - point] + 1;
//       findMaxPoint(
//         apeachCount,
//         ryanCount + point,
//         usedShots + info[10 - point] + 1,
//         point + 1,
//         current
//       );
//     }

//     if (info[10 - point] > 0) {
//       // 어피치가 이겨 포인트를 얻는 경우
//       findMaxPoint(apeachCount + point, ryanCount, usedShots, point + 1, arr);
//     } else {
//       // 둘다 점수를 얻지 못하는 경우
//       findMaxPoint(apeachCount, ryanCount, usedShots, point + 1, arr);
//     }
//   }

//   findMaxPoint(0, 0, 0, 0, answer); // 0포인트 부터 나올수 있는 모든 경우를 탐색한다

//   return maxCount <= 0 ? [-1] : answer;
// }

// 1. 라이언이 이기는 경우
// 2. 어피치가 이기는 경우

// function solution(n, info) {
//   let answer = Array(11).fill(0);
//   let maxValue = 0;

//   function searchAllValues(apeachPoint, ryanPoint, shots, point, arr) {
//     if (n < shots) {
//       return;
//     }

//     if (point > 10) {
//       let currentPoint = ryanPoint - apeachPoint;
//       if (currentPoint > maxValue) {
//         arr[10] = n - shots;
//         maxValue = currentPoint;
//         answer = arr;
//       }
//       return;
//     }

//     if (n > shots) {
//       let currentShot = info[10 - point] + 1;
//       let currentArr = [...arr];
//       currentArr[10 - point] = currentShot;
//       searchAllValues(
//         apeachPoint,
//         ryanPoint + point,
//         shots + currentShot,
//         point + 1,
//         currentArr
//       );
//     }

//     if (info[10 - point] > 0) {
//       searchAllValues(apeachPoint + point, ryanPoint, shots, point + 1, arr);
//     } else {
//       searchAllValues(apeachPoint, ryanPoint, shots, point + 1, arr);
//     }
//   }

//   searchAllValues(0, 0, 0, 0, answer);

//   return maxValue <= 0 ? [-1] : answer;
// }

function solution(n, info) {
  let answer = Array(11).fill(0);
  let pointDiff = -1;

  function findAllPoints(apeachPoint, ryanPoint, currentPoint, usedShots, map) {
    if (usedShots > n) {
      return;
    }

    if (currentPoint === 11) {
      let diff = ryanPoint - apeachPoint;
      if (diff > pointDiff) {
        pointDiff = diff;
        answer = map;
        answer[10] = n - usedShots;
      }
      return;
    }

    if (usedShots < n) {
      let apeachArrows = info[10 - currentPoint];
      let currentArr = [...map];
      currentArr[10 - currentPoint] = apeachArrows + 1;
      findAllPoints(
        apeachPoint,
        ryanPoint + currentPoint,
        currentPoint + 1,
        usedShots + apeachArrows + 1,
        currentArr
      );
    }

    if (info[10 - currentPoint] > 0) {
      findAllPoints(
        apeachPoint + currentPoint,
        ryanPoint,
        currentPoint + 1,
        usedShots,
        map
      );
    } else {
      findAllPoints(apeachPoint, ryanPoint, currentPoint + 1, usedShots, map);
    }
  }

  findAllPoints(0, 0, 0, 0, answer);

  return pointDiff <= 0 ? [-1] : answer;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
