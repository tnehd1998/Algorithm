// 생각한 풀이 방법
// 1. 모든 경우가 0인 경우를 방지해 answer을 0으로 초기화함
// 2. 오름차순으로 citations을 정렬함
// 3. 현재 citation의 값이 남은 citation보다 크거나 같은 값을 찾음

function solution(citations) {
  let answer = 0; // 모든 경우가 0인 경우를 방지해 answer을 0으로 초기화함
  citations = citations.sort((a, b) => a - b); // 오름차순으로 citations을 정렬함
  for (let i = 0; i < citations.length; i++) {
    let leftNumber = citations.length - i;
    if (citations[i] >= leftNumber) {
      // 현재 citation의 값이 남은 citation보다 크거나 같은 값을 찾음
      answer = citations.length - i;
      break;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([0, 0, 0, 0, 0]));
