function solution(rows, columns, queries) {
  let answer = [];
  let arr = [];
  let count = 1;
  for (let i = 0; i < rows; i++) {
    let current = [];
    for (let j = 0; j < columns; j++) {
      current.push(count);
      count++;
    }
    arr.push(current);
  }

  for (let i = 0; i < queries.length; i++) {
    let currentQuery = queries[i];
    let min = Number.MAX_SAFE_INTEGER;
    let start = arr[currentQuery[0] - 1][currentQuery[1] - 1];
    for (let i = currentQuery[1]; i < currentQuery[3]; i++) {
      let temp = arr[currentQuery[0] - 1][i];
      arr[currentQuery[0] - 1][i] = start;
      min = Math.min(min, start);
      start = temp;
    }
    for (let i = currentQuery[0]; i < currentQuery[2]; i++) {
      let temp = arr[i][currentQuery[3] - 1];
      arr[i][currentQuery[3] - 1] = start;
      min = Math.min(min, start);
      start = temp;
    }
    for (let i = currentQuery[3] - 2; i >= currentQuery[1] - 1; i--) {
      let temp = arr[currentQuery[2] - 1][i];
      arr[currentQuery[2] - 1][i] = start;
      min = Math.min(min, start);
      start = temp;
    }
    for (let i = currentQuery[2] - 2; i >= currentQuery[0] - 1; i--) {
      let temp = arr[i][currentQuery[1] - 1];
      arr[i][currentQuery[1] - 1] = start;
      min = Math.min(min, start);
      start = temp;
    }
    answer.push(min);
  }

  return answer;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);

console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
);

console.log(solution(100, 97, [[1, 1, 100, 97]]));
