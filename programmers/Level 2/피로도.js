// 생각한 풀이 방법 (1차 시도 -> 실패)
// 최소 필요 피로도 - 소모 피로도가 가장 큰 순서 부터 처리하면 된다고 생각함
// 1. 최소 필요 피로도 - 소모 피로도 내림차순으로 dungeons을 정렬
// 2. dungeons을 탐색 후, 탐험할 수 없으면 해당 값을 반환함

// function solution(k, dungeons) {
//   let answer = 0;

//   dungeons = dungeons.sort((a, b) => {
//     if (b[0] - b[1] === a[0] - a[1]) return b[0] - a[0];
//     return b[0] - b[1] - (a[0] - a[1]);
//   });

//   for (let i = 0; i < dungeons.length; i++) {
//     let current = dungeons[i];
//     if (k < current[0]) {
//       return answer;
//     }
//     k -= dungeons[1];
//     answer++;
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. DFS를 활용하여 모든 경우의 조합을 answer에 추가함
// 2. answer의 최대값을 반환함

function solution(k, dungeons) {
  let answer = [];
  let visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);

    for (let i = 0; i < dungeons.length; i++) {
      let current = dungeons[i];
      if (k >= current[0] && !visited[i]) {
        visited[i] = 1;
        dfs(count + 1, k - current[1]);
        visited[i] = 0;
      }
    }
  }

  dfs(0, k);

  return Math.max(...answer);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
