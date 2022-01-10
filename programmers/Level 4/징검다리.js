// 생각한 풀이 방법
// 1. 문제 설명에 오류가 있는거 같다. 문제를 풀때 n과 같거나 작으면 가능한걸로 해석했다.
// 2. 초기에 최소값과 최대값 distance의 mid를 기준값으로 설정한다.
// 3. mid를 기준으로 이전값 previous와의 차이를 구한다.
// 3-1. 해당 차이가 mid보다 작다면 removeCount를 증가시킨다.
// 3-2. 해당 차이가 mid보다 크다면 현재 바위를 previous값으로 바꾼다.
// 4-1. 제거된 바위 갯수가 n보다 크면 max를 mid-1로 바꾼다.
// 4-2. 제거된 바위 갯수가 n보다 크면 min를 mid+1로 바꾼 후, answer과 비교를 하여 answer보다 값이 크다면 해당 값으로 바꾼다.
// 5. min과 max가 만나기 전까지 2~4과정을 반복한다.

function solution(distance, rocks, n) {
  let answer = 0;
  let min = 1;
  let max = distance;

  rocks.sort((a, b) => a - b);

  while (min <= max) {
    // min과 max가 만나기 전까지 반복한다.
    let removeCount = 0;
    let previous = 0;
    let mid = Math.floor((max + min) / 2);
    // 최소값과 최대값 distance의 mid를 기준값으로 설정

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - previous <= mid) {
        removeCount++; // 해당 차이가 mid보다 작다면 removeCount를 증가
      } else {
        previous = rocks[i]; // 해당 차이가 mid보다 크다면 현재 바위를 previous값으로 바꾼다
      }
    }

    if (removeCount > n) {
      max = mid - 1; // 제거된 바위 갯수가 n보다 크면 max를 mid-1로 바꾼다
    } else {
      min = mid + 1; // 제거된 바위 갯수가 n보다 크면 min를 mid+1로 바꾼다
      answer = Math.max(answer, min); // answer과 비교를 하여 answer보다 값이 크다면 해당 값으로 바꾼다.
    }
  }

  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
