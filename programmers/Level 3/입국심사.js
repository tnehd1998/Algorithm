// 생각한 풀이 방법 (이분탐색 알고리즘)
// 1. 범위의 시작인 start과 나올수 있는 최대 시간인 end를 설정한다.
// 2. start와 end의 중간인 mid를 기준으로 조건을 만족하는 최소값을 찾는다.
// 2-1. 해당 mid에 조건을 만족하지 않으면 start를 증가시킨다.
// 2-2. 해당 mid에 조건을 만족하면 end를 감소시킨다.
// 3. start와 end의 값이 같아질 때까지 과정 2를 반복한다.

function solution(n, times) {
  let start = 0; // 범위의 시작인 start
  let end = n * Math.max(...times); // 나올수 있는 최대 시간인 end

  // start와 end의 값이 같아질 때까지 과정 2를 반복한다.
  while (start !== end) {
    // start와 end의 중간인 mid를 기준으로 조건을 만족하는 최소값을 찾는다.
    let mid = Math.floor((start + end) / 2);
    let checkedNum = 0;
    for (let i = 0; i < times.length; i++) {
      checkedNum += Math.floor(mid / times[i]);
    }
    if (checkedNum >= n) {
      // 해당 mid에 조건을 만족하면 end를 감소시킨다.
      end = mid;
    } else {
      // 해당 mid에 조건을 만족하지 않으면 start를 증가시킨다.
      start = mid + 1;
    }
  }

  return start;
}

console.log(solution(6, [7, 10]));
