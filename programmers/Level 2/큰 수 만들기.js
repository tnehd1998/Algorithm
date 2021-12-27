// 생각한 풀이 방법 (1차 시도 -> 시간 초과)
// 1. 현재 숫자와 다음수를 비교해 다음수가 더 크면 현재 숫자를 제거함
// 2. 숫자의 최대 크기가 9이기 때문에 9가 나오면 해당 경우를 넘어감
// 3. 숫자 제거를 k번 반복함
// 4. 제거한 숫자 count가 k보다 작을 경우 맨 앞과 뒤를 비교함
// 4-1. 앞의 숫자가 큰 경우 뒤에서 부터 k-count만큼 잘라냄
// 4-1. 뒤의 숫자가 큰 경우 앞에서 부터 k-count만큼 잘라냄

function solution(number, k) {
  let count = 0;
  let answer = number.split("");

  for (let i = 0; i < k; i++) {
    // 숫자 제거를 k번 반복함
    for (let j = 0; j < answer.length; j++) {
      // 숫자의 최대 크기가 9이기 때문에 9가 나오면 해당 경우를 넘어감
      if (Number(answer[j]) === 9) {
        continue;
      }
      // 현재 숫자와 다음수를 비교해 다음수가 더 크면 현재 숫자를 제거함
      if (Number(answer[j]) < Number(answer[j + 1])) {
        answer.splice(j, 1);
        count++;
        break;
      }
    }
  }

  if (count < k) {
    // 제거한 숫자 count가 k보다 작을 경우 맨 앞과 뒤를 비교함
    number[0] > number[number.length - 1]
      ? answer.splice(answer.length - (k - count), k - count) // 앞의 숫자가 큰 경우 뒤에서 부터 k-count만큼 잘라냄
      : answer.splice(0, k - count); // 뒤의 숫자가 큰 경우 앞에서 부터 k-count만큼 잘라냄
  }

  return answer.join("");
}

// 생각한 개선 방법 및 힌트
// 1. 시간 초과가 나기 때문에 연산 과정을 줄여야함
// 2. Stack을 사용하여 각 상황마다 값을 비교해가며 정답을 구한다

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
// 2. 1번과정을 현재 숫자보다 큰 수가 나올때까지 최대 k번 반복함
// 3. 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함

function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    // 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      // 현재 숫자보다 큰 수가 나올때까지 최대 k번 반복함
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k); // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
  return arr.join("");
}
