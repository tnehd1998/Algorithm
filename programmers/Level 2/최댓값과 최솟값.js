// 생각한 풀이 방법
// 1. s를 숫자 배열 형태로 변환한다.
// 2. 정렬한 후, 최대와 최소를 문자열로 반환한다.

function solution(s) {
  let numbers = s.split(" ").map((number) => +number); // s를 숫자 배열 형태로 변환

  numbers.sort((a, b) => a - b); // 정렬

  return `${numbers[0]} ${numbers[numbers.length - 1]}`; // 최대와 최소를 문자열로 반환
}
