function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    let array = [];
    for (let j = 0; j < current.length; j++) {
      array.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(array);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]]));
