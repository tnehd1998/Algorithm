// 생각한 풀이 방법
// 1. participant에 존재하는 이름만큼 더함
// 2. completion에 존재하는 이름만큼 뺌
// 3. 횟수가 0보다 클때 해당 이름을 반환함

function solution(participant, completion) {
  let obj = {};
  let answer = "";

  // participants에 나온 이름의 횟수만큼 obj에 저장함
  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]]) {
      obj[participant[i]]++;
    } else {
      obj[participant[i]] = 1;
    }
  }

  // completion에 나온 이름의 횟수만큼 obj에 저장된 값에서 뺌
  for (let i = 0; i < completion.length; i++) {
    obj[completion[i]]--;
  }

  // obj의 횟수가 0보다 큰 경우 answer로 반환함
  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]] > 0) {
      answer = participant[i];
    }
  }

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
