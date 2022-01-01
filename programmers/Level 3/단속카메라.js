// 생각한 풀이 방법
// 1. 차량이 나간 지점을 기준으로 배열을 정렬한다.
// 2. 현재 차량의 나간 지점보다 다음 차량의 진입 지점보다 작은 경우만 카메라를 하나 더 설치한다.
// 3. 모든 차량을 검사할 때까지 조건 2를 반복한다.

function solution(routes) {
  let answer = 0;

  // 차량이 나간 지점을 기준으로 배열을 정렬한다

  let lessThanZero = routes
    .filter((item) => item[1] < 0)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));

  let biggerThanZero = routes
    .filter((item) => item[1] >= 0)
    .sort((a, b) => a[1] - b[1]);

  // 음수와 양수를 나눠서 정렬한 후, 정렬된 음수 배열 + 정렬된 양수 배열로 합친다
  let sortedRoutes = [...lessThanZero, ...biggerThanZero];

  while (sortedRoutes.length) {
    // 모든 차량을 검사할 때까지 반복한다
    let cameraLocation = sortedRoutes.shift()[1];
    while (sortedRoutes.length) {
      if (sortedRoutes[0][0] <= cameraLocation) {
        sortedRoutes.shift(); // 카메라를 더 설치할 필요 없는 경우
      } else {
        break; // 카메라를 하나 더 설치해야 하는 경우
      }
    }
    // 현재 차량의 나간 지점보다 다음 차량의 진입 지점보다 작은 경우만 카메라를 하나 더 설치한다.
    answer++;
  }

  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);

console.log(
  solution([
    [2, 3],
    [0, 2],
    [3, 4],
    [4, 6],
  ])
);

console.log(
  solution([
    [-2, -1],
    [1, 2],
    [-3, 0],
  ])
);

console.log(
  solution([
    [-100, 100],
    [50, 170],
    [150, 200],
    [-50, -10],
    [10, 20],
    [30, 40],
  ])
);

console.log(solution([[0, 0]]));

console.log(
  solution([
    [0, 1],
    [0, 1],
    [1, 2],
  ])
);
