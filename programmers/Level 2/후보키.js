// 생각한 풀이 방법
// 1. 비트 연산을 통해 나올 수 있는 경우의 수를 계산한다.
// 2. 현재 조합의 갯수가 기존 갯수와 같으면 해당 경우를 answer에 추가한다.
// 3. answer중 중복되는 요소를 제거한다.

function solution(relation) {
  let total = relation[0].length;

  let maxNum = 1 << total;
  let answer = new Set();

  for (let i = 1; i < maxNum; i++) {
    let temp = relation.map((current) =>
      current.filter((_, index) => i & (1 << index)).join("")
    ); // 비트 연산을 통해 나올 수 있는 경우의 수를 계산한다.

    const filterArr = new Set(temp);
    if (temp.length === filterArr.size) {
      answer.add(i); // 현재 조합의 갯수가 기존 갯수와 같으면 해당 경우를 answer에 추가
    }
  }

  for (let x of answer) {
    for (let y of answer) {
      if (x >= y) {
        continue;
      }
      if ((x & y) === x) {
        answer.delete(y); // answer중 중복되는 요소를 제거
      }
    }
  }

  return [...answer].length;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
