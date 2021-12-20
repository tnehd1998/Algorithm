// 생각한 풀이 방법
// 1. command에 맞게 해당 값을 찾아 answer에 추가한 후 반환함

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let slicedArray = array.slice(commands[i][0] - 1, commands[i][1]);
    slicedArray.sort((a, b) => a - b);
    answer.push(slicedArray[commands[i][2] - 1]);
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
