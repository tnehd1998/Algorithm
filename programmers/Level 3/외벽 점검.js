// 생각한 풀이 방법 (1차 시도 -> 시간초과)
// 1. DFS를 활용해 가능한 경우를 모두 탐색한다.
// 2. 모든 weak를 totalArr에 포함하고 있는지 확인한다.
// 2-1. 포함하고 있다면 현재 투입된 인원인 peopleCount와 answer중 최소값을 저장한다.
// 2-2. 포함하고 있지 않다면 가장 범위가 큰 사람부터 가능한 경우를 모두 탐색하여 값을 찾는다.

// function solution(n, weak, dist) {
//   let answer = dist.length + 1;

//   function findValue(peopleCount, currentCount, totalArr) {
//     if (totalArr.size === weak.length) {
//       // 모든 weak를 totalArr에 포함하고 있는지 확인
//       return (answer = Math.min(answer, peopleCount)); // 최소값을 저장
//     }

//     if (currentCount < 0) {
//       return;
//     }

//     let currentDist = dist[currentCount]; // 가장 범위가 큰 사람

//     for (let i = 0; i < weak.length; i++) {
//       // 가능한 경우를 모두 탐색
//       let currentArr = new Set([...totalArr]);
//       let currentWeak = weak[i];
//       let totalRange = currentWeak + currentDist;
//       if (totalRange >= n) {
//         totalRange -= n;
//         for (let j = 0; j < weak.length; j++) {
//           if (weak[j] >= currentWeak || weak[j] <= totalRange) {
//             currentArr.add(weak[j]);
//           }
//         }
//       } else {
//         for (let j = 0; j < weak.length; j++) {
//           if (currentWeak <= weak[j] && weak[j] <= totalRange) {
//             currentArr.add(weak[j]);
//           }
//         }
//       }
//       findValue(peopleCount + 1, currentCount - 1, currentArr);
//     }
//   }

//   for (let i = 0; i < weak.length; i++) {
//     findValue(0, dist.length - 1, []); // DFS를 활용해 가능한 경우를 모두 탐색
//   }

//   return answer === dist.length + 1 ? -1 : answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. weak의 모든 경우를 totalArr에 저장한다.
// 2. 순열을 활용해서 모든 경우를 탐색한다.
// 3. 인원수를 증가시키며, weak를 모두 제거하는 경우 해당 i를 반환한다.

function solution(n, weak, dist) {
  let answer = weak.length;
  let totalArr = Array(answer * 2 - 1).fill(0);

  for (let i = 0; i < answer * 2 - 1; i++) {
    // weak의 모든 경우를 totalArr에 저장
    totalArr[i] = i < answer ? weak[i] : weak[i - answer] + n;
  }

  dist.sort((a, b) => b - a);

  function getPossibilities(arr, n) {
    if (n === 1) {
      return arr.map((current) => [current]);
    }

    let result = [];

    arr.forEach((fixed, index, origin) => {
      let rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      let next = getPossibilities(rest, n - 1);
      let attached = next.map((current) => [fixed, ...current]);
      result.push(...attached);
    });

    return result;
  }

  for (let i = 1; i <= dist.length; i++) {
    // 인원수를 증가
    let possibilities = getPossibilities(dist, i); // 순열을 활용해서 모든 경우를 탐색

    for (const possible of possibilities) {
      for (let j = 0; j < answer; j++) {
        let line = totalArr.slice(j, answer + j);
        for (const p of possible) {
          let coverage = line[0] + p;
          line = line.filter((e) => e > coverage);
          if (!line.length) {
            // weak를 모두 제거하는 경우
            return i;
          }
        }
      }
    }
  }

  return -1;
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));
console.log(solution(50, [1], [6]));
