// 생각한 풀이 방법 (Kruskal 알고리즘)
// 1. 해당 섬들의 parent를 저장하는 배열을 생성함
// 2. 모든 섬의 다리 건설 비용의 오름차순으로 정렬함
// 3. 해당 경로를 parent를 기반으로 Union, Find 알고리즘을 활용하여 경로를 찾음

function getParent(parentArr, point) {
  // 특정 섬의 parent을 반환함
  if (parentArr[point] === point) return point;
  return (parentArr[point] = getParent(parentArr, parentArr[point]));
}

function setParent(parentArr, a, b) {
  // 해당 섬의 parent를 설정함
  const parentA = getParent(parentArr, a);
  const parentB = getParent(parentArr, b);
  if (parentA < parentB) return (parentArr[parentB] = parentA);
  return (parentArr[parentA] = parentB);
}

function solution(n, costs) {
  let answer = 0;

  // 해당 섬들의 parent를 저장하는 배열을 생성함
  let parentArr = Array(n)
    .fill()
    .map((obj, index) => index);

  // 모든 섬의 다리 건설 비용의 오름차순으로 정렬
  costs.sort((a, b) => {
    if (a[2] === b[2]) return a[0] - b[0];
    return a[2] - b[2];
  });

  // 해당 경로를 Union, Find 알고리즘을 활용하여 경로를 찾음
  for (const cost of costs) {
    if (getParent(parentArr, cost[0]) !== getParent(parentArr, cost[1])) {
      answer += cost[2];
      setParent(parentArr, cost[0], cost[1]);
    }
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);

console.log(
  solution(5, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7],
  ])
);

console.log(
  solution(5, [
    [0, 1, 1],
    [3, 4, 1],
    [1, 2, 2],
    [2, 3, 4],
  ])
);

console.log(
  solution(4, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [1, 3, 2],
    [0, 3, 4],
  ])
);

console.log(
  solution(5, [
    [0, 1, 1],
    [3, 1, 1],
    [0, 2, 2],
    [0, 3, 2],
    [0, 4, 100],
  ])
);

console.log(
  solution(5, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7],
  ])
);

console.log(
  solution(6, [
    [0, 1, 5],
    [0, 3, 2],
    [0, 4, 3],
    [1, 4, 1],
    [3, 4, 10],
    [1, 2, 2],
    [2, 5, 3],
    [4, 5, 4],
  ])
);

console.log(
  solution(5, [
    [0, 1, 1],
    [2, 3, 1],
    [3, 4, 2],
    [1, 2, 2],
    [0, 4, 100],
  ])
);

console.log(
  solution(5, [
    [0, 1, 1],
    [0, 4, 5],
    [2, 4, 1],
    [2, 3, 1],
    [3, 4, 1],
  ])
);

console.log(
  solution(5, [
    [0, 1, 1],
    [0, 2, 2],
    [0, 3, 3],
    [0, 4, 4],
    [1, 3, 1],
  ])
);

console.log(
  solution(5, [
    [0, 1, 1],
    [3, 4, 1],
    [1, 2, 2],
    [2, 3, 4],
  ])
);

console.log(
  solution(5, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7],
  ])
);
