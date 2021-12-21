// 생각한 풀이 방법 (1차 시도)
// 1. DFS로 탐색을 해 모든 경우를 구함
// 2. 해당 경우에 맞게 모든 경우의 수 result에 저장함
// 3. 최대 값을 반환함

// => 시간 초과

// function solution(numbers) {
//   let visited = Array(numbers.length);
//   let output = [];
//   let result = [];

//   function calculateTime(count) {
//     if (count === numbers.length) {
//       let currentValue = "";
//       for (let i = 0; i < numbers.length; i++) {
//         currentValue += String(numbers[output[i] - 1]);
//       }
//       return result.push(currentValue);
//     }
//     for (let i = 0; i < numbers.length; i++) {
//       if (visited[i]) continue;
//       visited[i] = true;
//       output.push(i + 1);
//       calculateTime(count + 1);
//       output.pop();
//       visited[i] = false;
//     }
//   }
//   calculateTime(0);

//   return Math.max(...result.map((item) => +item)) + "";
// }

// 칮아낸 방법
// 해당 문제의 정렬 방식은
// (해당 숫자의 문자 형태 + 다음 숫자의 문자 형태) - (다음 숫자의 문자 형태 + 해당 숫자의 문자 형태)
// 를 통해 정렬이 가능하다

// Ex) [3,34] => 334 < 343

// 생각한 풀이 방법 (2차 시도)
// 1. 모든 숫자가 0인 경우 0으로 출력하게 한다
// 2. 모든 숫자가 0이 아닌 경우 해당 조건에 맞게 정렬을 한다
// 3. 모든 숫자를 연결하여 최대값을 반환한다

function solution(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  if (!totalSum) {
    // 모든 숫자가 0인 경우 0으로 출력하게 한다
    return "0";
  }
  return numbers // 모든 숫자가 0이 아닌 경우 해당 조건에 맞게 정렬을 한다
    .sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString()))
    .map((number) => number + "")
    .join(""); // 모든 숫자를 연결하여 최대값을 반환한다
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([100, 1000]));
console.log(solution([0, 0, 0, 0, 0, 0, 0]));
