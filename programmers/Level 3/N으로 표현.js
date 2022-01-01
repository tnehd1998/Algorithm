// 생각한 풀이 방법
// 1. N을 기반으로 만들수 있는 모든 숫자를 arr에 추가한다.
// 2. 추가한 모든 숫자를 사칙연산을 사용하여 나올수 있는 경우의 수를 모두 계산하여 arr에 push한다.
// 3. 해당 number가 arr에 존재하는 경우 해당 값을 반환한다.
// 4. 모든 경우의 수를 조합했는데도 불구하고 8보다 작거나 같은 number가 존재하지 않는 경우 -1을 반환한다.

function solution(N, number) {
  let arr = Array(8)
    .fill()
    .map(() => new Array());

  for (let i = 0; i < 8; i++) {
    arr[i].push(Number(N.toString().repeat(i + 1))); // N을 기반으로 만들수 있는 모든 숫자를 arr에 추가한다.
    for (let j = 0; j < i; j++) {
      for (let num1 of arr[j]) {
        for (let num2 of arr[i - j - 1]) {
          // 추가한 모든 숫자를 사칙연산을 사용하여 나올수 있는 경우의 수를 모두 계산하여 arr에 push한다.
          arr[i].push(num1 + num2);
          arr[i].push(num1 - num2);
          arr[i].push(num1 * num2);
          arr[i].push(num1 / num2);
        }
      }
    }
    if (arr[i].includes(number)) return i + 1; // 해당 number가 arr에 존재하는 경우 해당 값을 반환한다.
  }
  return -1; // 모든 경우의 수를 조합했는데도 불구하고 8보다 작거나 같은 number가 존재하지 않는 경우 -1을 반환한다.
}

console.log(solution(5, 12));
console.log(solution(2, 11));
