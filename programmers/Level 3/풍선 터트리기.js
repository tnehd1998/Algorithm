// 생각한 풀이 방법
// 1. 맨 앞과 뒤는 값과 상관없이 무조건 제외가능하기 때문에 제외를 하고 탐색한다.
// 2-1. 앞에서 부터 비교를 하며, 맨 앞보다 값이 작으면 해당 값을 front로 변환 후 frontArr에 push한다
// 2-2. 뒤에서 부터 비교를 하며, 맨 뒤보다 값이 작으면 해당 값을 back로 변환 후 backArr에 push한다
// 3. 중복된 값을 제거한 후 맨 앞과 뒤를 의미하는 2를 더한 값을 반환한다.

function solution(a) {
  let front = a[0];
  let back = a[a.length - 1];
  let frontArr = [];
  let backArr = [];

  for (let i = 1; i < a.length - 1; i++) {
    // 맨 앞과 뒤는 값과 상관없이 무조건 제외가능하기 때문에 제외를 하고 탐색
    let current = a[i];
    if (current < front) {
      // 앞에서 부터 비교
      front = current; // 맨 앞보다 값이 작으면 해당 값을 front로 변환
      frontArr.push(current); // frontArr에 push
    }
  }

  for (let i = 1; i < a.length - 1; i++) {
    // 맨 앞과 뒤는 값과 상관없이 무조건 제외가능하기 때문에 제외를 하고 탐색
    let current = a[a.length - i - 1];
    if (current < back) {
      // 뒤에서 부터 비교
      back = current; // 맨 뒤보다 값이 작으면 해당 값을 back로 변환
      backArr.push(current); // backArr에 push
    }
  }

  return [...new Set([...frontArr, ...backArr])].length + 2; // 중복된 값을 제거한 후 맨 앞과 뒤를 의미하는 2를 더한 값을 반환
}

console.log(solution([9, -1, -5]));
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));
