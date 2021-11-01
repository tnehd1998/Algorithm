function solution(arr) {
  let deleteIndex = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    deleteIndex = Math.min(deleteIndex, arr[i]);
  }
  arr.length > 1 ? arr.splice(arr.indexOf(deleteIndex), 1) : (arr = [-1]);

  return arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
