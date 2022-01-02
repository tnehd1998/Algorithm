// 생각한 풀이 방법 (1차 시도 -> 실패)
// 1. Find-Union을 통해 parentArr을 구함
// 2. parentArr중 Set을 활용하여 중복을 제거함
// 3. 네트워크의 갯수인 parentArr의 길이를 반환함

// function getParent(current, parentArr) {
//   if (parentArr[current] === current) {
//     return current;
//   }
//   return getParent(parentArr[current], parentArr);
// }

// function setParent(current, parentArr) {
//   return getParent(current, parentArr);
// }

// function solution(n, computers) {
//   let parentArr = Array(n)
//     .fill()
//     .map((_, index) => index);

//   for (let computer of computers) {
//     let parentValue;
//     for (let i = 0; i < computer.length; i++) {
//       if (computer[i] === 1) {
//         parentValue = i;
//         break;
//       }
//     }
//     for (let i = parentValue + 1; i < computer.length; i++) {
//       if (computer[i] === 1) {
//         parentArr[i] = setParent(parentValue, parentArr);
//       }
//     }
//   }

//   return new Set([...parentArr]).size;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. DFS를 활용해 모든 경우를 탐색함
// 2. visited가 false이면 DFS로 탐색을 함
// 3. 방문한 컴퓨터는 해당 컴퓨터의 값을 true로 바꿈
// 4. 방문할 때마다 answer을 증가시킴

function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);

  function dfs(current) {
    visited[current] = true; // 방문한 컴퓨터는 해당 컴퓨터의 값을 true로 바꿈
    for (let i = 0; i < computers.length; i++) {
      if (computers[current][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    // visited가 false이면 DFS로 탐색을 함
    if (!visited[i]) {
      dfs(i);
      answer++; // 방문할 때마다 answer을 증가시킴
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);

console.log(
  solution(3, [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
