// 생각한 풀이 방법
// 1. 나올수 있는 모든 경우의 수를 arr에 저장한다.
// 2. 튜브가 말해야 하는 숫자를 answer에 저장후 반환한다.

function solution(n, t, m, p) {
  let answer = "";
  let arr = [];

  for (let i = 0; i < t * m; i++) {
    // 나올수 있는 모든 경우의 수를 arr에 저장한다.
    let current = i.toString(n).split("");
    for (let j = 0; j < current.length; j++) {
      arr.push(current[j]);
    }
  }

  for (let i = 0; i < t; i++) {
    // 튜브가 말해야 하는 숫자를 answer에 저장후 반환한다.
    let current = p + m * i - 1;
    answer += arr[current];
  }

  return answer.toUpperCase();
}

solution(2, 4, 2, 1);
solution(16, 16, 2, 1);
solution(16, 16, 2, 2);
