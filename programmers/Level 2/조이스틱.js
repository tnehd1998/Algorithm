// 생각한 풀이 방법
// 1. 해당 문자의 자릿수만큼 계산을 하며 오른쪽으로 이동한다.
// 2. A가 나오는 경우 연속적으로 나온 A의 갯수를 계산한다.
// 3. 연속된 A의 숫자가 현재 index+1보다 큰 경우 차이를 빼서 반대로 돌아간 효과를 준다.
// 4. 최종적으로 사용된 횟수를 반환한다.

function solution(name) {
  let answer = 0;
  let arr = [0];

  for (let i = 0; i < name.length; i++) {
    if (name[i] === "A") {
      // A가 나오는 경우 연속적으로 나온 A의 갯수를 계산한다.
      if (i === 0) {
        arr.push(calculateRepeatingA(name) - 1);
      } else if (name[i - 1] !== "A") {
        // 연속된 A의 숫자가 현재 index+1보다 큰 경우 차이를 빼서 반대로 돌아간 효과를 준다.
        arr.push(calculateRepeatingA(name.slice(i)) - (i - 1));
      }
      answer++;
    } else {
      answer += calculateCount(name[i]) + 1; // 해당 문자의 자릿수만큼 계산을 하며 오른쪽으로 이동한다.
    }
  }

  return answer - Math.max(...arr) - 1; // 마지막은 오른쪽으로 이동할 필요가 없기에 1을 빼준다.
}

function calculateCount(value) {
  // 현재 문자까지 필요한 조이스틱 이동 횟수를 계산
  return value.charCodeAt() - 65 < 91 - value.charCodeAt()
    ? value.charCodeAt() - 65
    : 91 - value.charCodeAt();
}

function calculateRepeatingA(name) {
  // 연속으로 나오는 A의 갯수를 계산
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break;
    count++;
  }
  return count;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
console.log(solution("JAZ"));
console.log(solution("ABAAAAAAAAABB"));
console.log(solution("ABAAAA"));
