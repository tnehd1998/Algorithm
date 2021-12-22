// 생각한 풀이 방법
// 1. DFS로 탐색을 해 모든 경우를 구함,
// Number로 변환을 하기 때문에 맨 앞이 0인 경우는 자연스럽게 걸러짐
// 2. Set 자료구조를 활용해 중복을 제거함
// 3. 해당 숫자들이 소수인지 확인 후 answer을 증가시킴

function solution(numbers) {
  let answer = 0;
  let visited = Array(numbers.length);
  let output = [];
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    // DFS로 탐색을 해 모든 경우를 구함
    getPossibleNumber(i);
  }
  result = [...new Set(result)]; // Set 자료구조를 활용해 중복을 제거함

  for (let i = 0; i < result.length; i++) {
    if (isOdd(result[i])) {
      answer++; // 해당 숫자들이 소수인지 확인 후 answer을 증가시킴
    }
  }

  return answer;

  function getPossibleNumber(count) {
    if (count === numbers.length) {
      let currentNum = output.join("");
      result.push(Number(currentNum)); // Number로 변환을 하기 때문에 맨 앞이 0인 경우는 자연스럽게 걸러짐
    }
    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      output.push(numbers[i]);
      getPossibleNumber(count + 1);
      output.pop();
      visited[i] = false;
    }
  }

  function isOdd(number) {
    if (number === 0) {
      return false;
    }
    if (number === 1) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(solution("17"));
console.log(solution("011"));
