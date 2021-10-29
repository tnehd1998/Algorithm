function solution(nums) {
  let choice = nums.length / 2;
  let filterDuplicated = new Set(nums);
  let filteredNums = [...filterDuplicated].length;
  return choice > filteredNums ? filteredNums : choice;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
