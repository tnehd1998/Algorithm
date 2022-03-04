// 생각한 풀이 방법
// 1. n을 k진수로 변환한다.
// 2. 변환한 숫자를 0을 기준으로 나눠 배열에 저장한다.
// 3. 해당 숫자가 소수면 answer++한다.

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  let num = n.toString(k); // n을 k진수로 변환
  let numArr = num.split("0"); // 변환한 숫자를 0을 기준으로 나눠 배열에 저장

  for (let i = 0; i < numArr.length; i++) {
    if (isPrimeNumber(Number(numArr[i]))) {
      answer++; // 해당 숫자가 소수면 answer++
    }
  }

  return answer;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
