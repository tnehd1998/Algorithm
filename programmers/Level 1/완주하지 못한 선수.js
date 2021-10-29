function solution(participant, completion) {
  let obj = {};
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (obj[participant[i]]) {
      obj[participant[i]]++;
    } else {
      obj[participant[i]] = 1;
    }
  }
  for (let i = 0; i < completion.length; i++) {
    obj[completion[i]]--;
  }
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
