// 생각한 풀이 방법
// 1. validUsername 함수를 통해 조건에 만족하는 아이디인지 확인한다.
// 2. DFS를 활용하여 모든 경우를 탐색한다.
// 3. 가능한 경우의 수를 possibilites에 저장하고 중복되는 경우를 제거한다.

function validUsername(username, hidden) {
  // 조건에 만족하는 아이디인지 확인
  if (username.length !== hidden.length) {
    return false;
  }

  for (let i = 0; i < username.length; i++) {
    let currentName = username[i];
    let currentHidden = hidden[i];
    if (currentHidden === "*") {
      continue;
    }
    if (currentName !== currentHidden) {
      return false;
    }
  }

  return true;
}

function solution(user_id, banned_id) {
  let possibilities = [];
  let validArr = Array(user_id.length).fill(false);

  function dfs(currentIndex, visited, possibleArr) {
    if (currentIndex === banned_id.length) {
      return possibilities.push(possibleArr); // 가능한 경우의 수를 possibilites에 저장
    }
    let currentId = banned_id[currentIndex];

    user_id.forEach((id, index) => {
      if (!visited[index] && validUsername(id, currentId)) {
        visited[index] = true;
        currentIndex++;
        possibleArr.push(id);
        dfs(currentIndex, visited, [...possibleArr]);
        visited[index] = false;
        currentIndex--;
        possibleArr.pop();
      }
    });

    return;
  }

  dfs(0, validArr, []); // DFS를 활용하여 모든 경우를 탐색

  for (let i = 0; i < possibilities.length; i++) {
    possibilities[i] = possibilities[i].sort().join("");
  }

  return new Set([...possibilities]).size; // 중복되는 경우를 제거
}

solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]);
solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["*rodo", "*rodo", "******"]
);
solution(
  ["frodo", "fradi", "crodo", "abc123", "frodoc"],
  ["fr*d*", "*rodo", "******", "******"]
);
