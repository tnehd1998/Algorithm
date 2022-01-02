// 생각한 풀이 방법
// 1. 값을 더하거나 빼는 recursive한 함수를 활용한다.
// 2. 모든 경우의 수를 도는 중에 target과 같은 경우 answer을 증가시킨다.

function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        // 모든 경우의 수를 도는 중에 target과 같은 경우 answer을 증가시킨다.
        answer++;
      }
      return;
    }

    // 값을 더하거나 빼는 recursive한 함수를 활용한다.
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
