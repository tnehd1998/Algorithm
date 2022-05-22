// 생각한 풀이 방법
// 1. 아래 첨부된 블로그 글의 공식을 활용했다.
// 2. 공식에 맞게 최대 크기를 구한 후 반환한다.

function solution(board) {
  let answer = 0;

  if (board < 2 || board[0] < 2) {
    return 1;
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j]) {
        let minValue = Math.min(
          board[i - 1][j - 1],
          board[i - 1][j],
          board[i][j - 1]
        );
        board[i][j] = minValue + 1;
        answer = Math.max(answer, minValue + 1);
      }
    }
  }

  return answer * answer;
}

solution([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
]);
solution([
  [0, 0, 1, 1],
  [1, 1, 1, 1],
]);
