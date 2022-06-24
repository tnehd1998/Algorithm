// 생각한 풀이 방법
// 1. 백트래킹을 활용하여 가능한 경우의 수를 모두 구한다.

function checkValid(board, row) {
  for (let i = 1; i < row; i++) {
    if (board[i] === board[row]) {
      return false;
    }
    if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
      return false;
    }
  }

  return true;
}

function solution(n) {
  let answer = 0;

  function dfs(board, row) {
    if (row === n) {
      answer++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      board[row + 1] = i;
      if (checkValid(board, row + 1)) {
        dfs(board, row + 1);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let board = Array(n + 1).fill(0);
    board[1] = i;
    dfs(board, 1);
  }

  return answer;
}

console.log(solution(4));
