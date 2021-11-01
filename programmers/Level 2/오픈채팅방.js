function solution(record) {
  let userInfo = {};
  let totalMessage = [];
  let answer = [];
  for (let i = 0; i < record.length; i++) {
    let records = record[i].split(" ");
    switch (records[0]) {
      case "Enter":
        userInfo[records[1]] = records[2];
        totalMessage.push([records[0], records[1]]);
        break;
      case "Leave":
        totalMessage.push([records[0], records[1]]);
        break;
      case "Change":
        userInfo[records[1]] = records[2];
        break;
    }
  }
  for (let i = 0; i < totalMessage.length; i++) {
    switch (totalMessage[i][0]) {
      case "Enter":
        answer.push(`${userInfo[totalMessage[i][1]]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${userInfo[totalMessage[i][1]]}님이 나갔습니다.`);
        break;
    }
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
