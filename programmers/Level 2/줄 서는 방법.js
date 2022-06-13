// 생각한 풀이 방법 (1차 시도 -> 시간 초과)
// 1. dfs로 모든 경우를 possibilities에 저장한다.
// 2. k번째에 맞는 배열을 반환한다.

// function solution(n, k) {
//   let possibilities = [];

//   let visited = Array(n).fill(false);

//   function dfs(current, total) {
//     if (total === n) {
//       return possibilities.push(current);
//     }

//     for (let i = 0; i < n; i++) {
//       if (!visited[i]) {
//         visited[i] = true;
//         dfs([...current, i + 1], total + 1, visited);
//         visited[i] = false;
//       }
//     }
//   }

//   dfs([], 0, visited);

//   return possibilities[k - 1];
// }

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 각 자리수에 맞는 수를 answer에 추가한다.

function getFactorial(n) {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer *= i;
  }
  return answer;
}

function solution(n, k) {
  let answer = [];
  let arr = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    arr[i] = arr[i - 1] + 1;
  }

  let nth = k - 1;

  while (arr.length) {
    if (nth === 0) {
      answer.push(...arr);
      break;
    }

    const factorial = getFactorial(arr.length - 1);
    const index = (nth / factorial) >> 0;
    nth = nth % factorial;

    answer.push(arr[index]);
    arr.splice(index, 1);
  }

  return answer;
}

solution(3, 5);
