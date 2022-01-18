// 생각한 풀이 방법
// 1. 해당 튜플마다 arr에 순차적으로 나눠 저장한다.
// 2. 각 튜플의 원소 갯수를 기준으로 정렬한다.
// 3. 튜플마다 숫자를 확인하는데 answer에 존재하지 않으면 해당 숫자를 push한다.

function solution(s) {
  let answer = [];
  s = s.substring(2, s.length - 2);
  let arr = s.split(/},{/g); // 해당 튜플마다 arr에 순차적으로 나눠 저장한다.
  arr.sort((a, b) => a.length - b.length); // 각 튜플의 원소 갯수를 기준으로 정렬한다.

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(",").map((item) => +item);
    for (let j = 0; j < current.length; j++) {
      // 튜플마다 숫자를 확인
      if (!answer.includes(current[j])) {
        // answer에 존재하지 않으면
        answer.push(current[j]); // 해당 숫자를 push한다.
      }
    }
  }

  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
