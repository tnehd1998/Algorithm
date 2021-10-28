function solution(board, moves) {
  let stack = [];
  let maxLength = board[0].length;
  let poppedCount = 0;
  for (let i = 0; i < moves.length; i++) {
    let currentValue = moves[i] - 1;
    let currentHeight = 0;
    while (!board[currentHeight][currentValue]) {
      currentHeight++;
      if (currentHeight === maxLength) {
        break;
      }
    }
    if (currentHeight !== maxLength) {
      let addingValue = board[currentHeight][currentValue];
      if (!stack.length) {
        stack.push(addingValue);
      } else {
        if (addingValue === stack[stack.length - 1]) {
          stack.pop();
          poppedCount++;
        } else {
          stack.push(addingValue);
        }
      }
      board[currentHeight][currentValue] = 0;
    }
  }
  return poppedCount * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
