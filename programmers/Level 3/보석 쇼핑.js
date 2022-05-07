// 생각한 풀이 방법 (1차 시도 -> 시간 초과)
// 1. 필요한 보석의 종류를 totalGem에 저장한다.
// 2. 필요한 보석의 갯수를 totalGem의 갯수부터 최대 갯수까지 하나씩 증가시키면서 탐색한다.
// 3. 처음부터 차례대로 탐색을 해 길이가 같은 경우 시작 index가 더 작은 것이 저장되도록 한다.
// 4. 보석의 갯수가 최소임과 동시에 시작 index가 가장 빠른 값을 반환한다.

// function solution(gems) {
//   let totalGem = [...new Set([...gems])]; // 필요한 보석의 종류를 totalGem에 저장
//   let answer = [];
//   let minLength = Number.MAX_SAFE_INTEGER;

//   for (let i = 0; i <= gems.length - totalGem.length; i++) {
//     // 하나씩 증가시키면서 탐색
//     let gemCount = i + totalGem.length; // 필요한 보석의 갯수
//     let startIndex = 0;
//     let endIndex = gemCount + startIndex - 1;
//     while (endIndex < gems.length) {
//       endIndex = gemCount + startIndex;
//       let arr = gems.slice(startIndex, endIndex); // 처음부터 차례대로 탐색
//       let valid = true;
//       for (let j = 0; j < totalGem.length; j++) {
//         if (!arr.includes(totalGem[j])) {
//           valid = false;
//           break;
//         }
//       }
//       if (valid && arr.length < minLength) {
//         // 길이가 같은 경우 시작 index가 더 작은 것이 저장
//         minLength = arr.length;
//         answer = [startIndex + 1, endIndex]; // 보석의 갯수가 최소임과 동시에 시작 index가 가장 빠른 값을 반환
//       }
//       arr.push(gems[gemCount]);
//       startIndex++;
//     }
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 시작 인덱스를 나타내는 start와 마지막 인덱스를 나타내는 end를 옮긴다.
// 2. end의 경우 모든 gem이 포함될때까지 index를 증가시킨다.
// 3. end의 값을 구한 후, start의 인덱스를 하나씩 증가시키며 모든 gem이 포함되는 경우까지 인덱스 값을 증가시킨다.

// function solution(gems) {
//   let answer = [1, gems.length];
//   let totalGem = new Set(gems).size;

//   let start = 0; // 시작 인덱스를 나타내는 start
//   let end = 0; // 마지막 인덱스를 나타내는 end
//   let map = new Map();
//   map.set(gems[0], 1);

//   while (end < gems.length) {
//     console.log(end, gems.length);
//     if (map.size === totalGem) {
//       // end의 값을 구한 후
//       if (answer[1] - answer[0] > end - start) {
//         answer = [start + 1, end + 1];
//       }
//       map.set(gems[start], map.get(gems[start]) - 1);
//       if (map.get(gems[start]) === 0) {
//         map.delete(gems[start]);
//       }
//       start++; // start의 인덱스를 하나씩 증가
//     } else {
//       end++; // 모든 gem이 포함될때까지 index를 증가
//       let value = map.get(gems[end]);
//       map.set(gems[end], value ? value + 1 : 1);
//     }
//   }

//   return answer;
// }

function solution(gems) {
  let answer = [1, gems.length];
  let totalGem = new Set(gems);

  let startIndex = 0;
  let endIndex = totalGem.size - 1;
  let currentGems = gems.slice(0, endIndex + 1);

  while (endIndex < gems.length) {
    if (new Set(currentGems).size === totalGem.size) {
      if (answer[1] - answer[0] > endIndex - startIndex) {
        answer = [startIndex + 1, endIndex + 1];
      }
      currentGems.shift();
      startIndex++;
    } else {
      endIndex++;
      let nextGem = gems[endIndex];
      currentGems.push(nextGem);
    }
  }

  return answer;
}

solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]);
solution(["AA", "AB", "AC", "AA", "AC"]);
solution(["XYZ", "XYZ", "XYZ"]);
solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"]);
