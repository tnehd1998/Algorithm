// 생각한 풀이 방법
// 1. 숫자를 하나씩 더해 이진수일 때, 1의 갯수가 같은 수를 찾는다.

function solution(n) {
  let oneCount = n
    .toString(2)
    .split("")
    .filter((num) => num === "1").length;
  while (true) {
    let currentNum = ++n; // 숫자를 하나씩 더해
    let currentNumCount = currentNum
      .toString(2)
      .split("")
      .filter((num) => num === "1").length;
    if (currentNumCount === oneCount) {
      // 이진수일 때, 1의 갯수가 같은 수
      return n++;
    }
  }
}

solution(78);
solution(15);
