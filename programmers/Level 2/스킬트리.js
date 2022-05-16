// 생각한 풀이 방법
// 1. 존재하는 skill을 skillObj에 저장한다.
// 2. skillObj에 존재하는 값이 나오는 경우, 해당 값을 currentOrder에 추가한다.
// 3. currentOrder가 만족하는 스킬트리인 경우 answer값을 증가시킨다.
// 4. 2~3을 skill_trees 수만큼 반복한다.

function solution(skill, skill_trees) {
  let skillArr = skill.split("");
  let skillObj = {};
  let totalArr = [];
  for (let i = 0; i < skillArr.length; i++) {
    // 존재하는 skill을 skillObj에 저장
    skillObj[skillArr[i]] = i + 1;
    totalArr.push(i + 1);
  }

  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    // skill_trees 수만큼 반복
    let currentTree = skill_trees[i];
    let currentOrder = [];
    for (let j = 0; j < currentTree.length; j++) {
      if (skillObj[currentTree[j]]) {
        // skillObj에 존재하는 값이 나오는 경우
        currentOrder.push(skillObj[currentTree[j]]); // 해당 값을 currentOrder에 추가
      }
    }

    let totalOrder = currentOrder.join("");
    currentOrder.sort((a, b) => a - b);

    if (
      totalOrder === currentOrder.join("") &&
      totalArr.join("").includes(currentOrder.join(""))
    ) {
      // currentOrder가 만족하는 스킬트리인 경우
      if (currentOrder.length < 1 || currentOrder[0] === 1) {
        answer++; // answer값을 증가
      }
    }
  }

  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
solution("CBD", ["CAD"]);
solution("CBD", ["AEF", "ZJW"]);
solution("REA", ["REA", "POA"]);
