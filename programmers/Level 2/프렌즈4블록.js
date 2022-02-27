// 생각한 풀이 방법
// 1. 2x2를 만족하는 점을 찾는다
// 2. 해당 점들을 0으로 바꾼다.
// 3. board의 점 중 0인 경우 해당 점 위의 점들을 한칸 내린다.
// 4. 1~3의 작업을 만족하는 점이 없을 때까지 반복한다.
// 5. board중 값이 0인 경우, answer을 증가시킨다.

function solution(m, n, board) {
  let answer = 0;
  let poppedArr = [];

  board = board.map((current) => current.split(""));

  while (true) {
    // 1~3의 작업을 만족하는 점이 없을 때까지 반복한다
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let current = board[i][j];
        if (current !== 0) {
          // 2x2를 만족하는 점을 찾는다
          if (
            board[i + 1][j] === current &&
            board[i][j + 1] === current &&
            board[i + 1][j + 1] === current
          ) {
            poppedArr.push([i, j]);
          }
        }
      }
    }

    if (poppedArr.length === 0) {
      // 만족하는 점이 없을 때
      break;
    }

    for (let i = 0; i < poppedArr.length; i++) {
      // 해당 점들을 0으로 바꾼다.
      let [m, n] = poppedArr[i];
      board[m][n] = 0;
      board[m + 1][n] = 0;
      board[m][n + 1] = 0;
      board[m + 1][n + 1] = 0;
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          // board의 점 중 0인 경우 해당 점 위의 점들을 한칸 내린다.
          for (let k = i; k > 0; k--) {
            board[k][j] = board[k - 1][j];
          }
          board[0][j] = 0;
        }
      }
    }
    poppedArr = [];
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        //  board중 값이 0인 경우, answer을 증가시킨다.
        answer++;
      }
    }
  }

  return answer;
}

console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(2, 4, ["baab", "baab"]));
console.log(solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
console.log(
  solution(6, 6, ["AABBEE", "AAAEEE", "VAAEEV", "AABBEE", "AACCEE", "VVCCEE"])
);
console.log(solution(2, 2, ["AA", "AA"]));
console.log(solution(2, 2, ["AA", "AB"]));
console.log(solution(3, 2, ["AA", "AA", "AB"]));
console.log(solution(4, 2, ["CC", "AA", "AA", "CC"]));
console.log(solution(6, 2, ["DD", "CC", "AA", "AA", "CC", "DD"]));
console.log(solution(8, 2, ["FF", "AA", "CC", "AA", "AA", "CC", "DD", "FF"]));
console.log(solution(6, 2, ["AA", "AA", "CC", "AA", "AA", "DD"]));
console.log(solution(4, 5, ["AAAAA", "AUUUA", "AUUAA", "AAAAA"]));
console.log(
  solution(6, 6, ["IIIIOO", "IIIOOO", "IIIOOI", "IOOIII", "OOOIII", "OOIIII"])
);
