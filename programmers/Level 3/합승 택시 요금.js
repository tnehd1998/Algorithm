// 생각한 풀이 방법
// 1. 플로이드 와샬 알고리즘을 활용하여 최단 경로를 구한다.
// 2. 모든 점을 순회하여 각각 합승지점으로 가정한 후 최소 요금 경로 값을 answer에 저장한다.

function solution(n, s, a, b, fares) {
  // 플로이드 와샬 알고리즘을 활용하여 최단 경로를 구한다
  let path = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 1; i <= n; i++) {
    path[i][i] = 0;
  }

  for (let i = 0; i < fares.length; i++) {
    let [from, to, value] = fares[i];
    path[from][to] = value;
    path[to][from] = value;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (path[i][k] + path[k][j] < path[i][j]) {
          path[i][j] = path[i][k] + path[k][j];
        }
      }
    }
  }

  let answer = path[s][a] + path[s][b];

  for (let i = 1; i <= n; i++) {
    // 모든 점을 순회
    let current = path[s][i] + path[i][a] + path[i][b]; // 합승지점으로 가정
    answer = Math.min(current, answer); // 최소 요금 경로 값을 answer에 저장
  }

  return answer;
}

solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
solution(7, 3, 4, 1, [
  [5, 7, 9],
  [4, 6, 4],
  [3, 6, 1],
  [3, 2, 3],
  [2, 1, 6],
]);
solution(6, 4, 5, 6, [
  [2, 6, 6],
  [6, 3, 7],
  [4, 6, 7],
  [6, 5, 11],
  [2, 5, 12],
  [5, 3, 20],
  [2, 4, 8],
  [4, 3, 9],
]);
