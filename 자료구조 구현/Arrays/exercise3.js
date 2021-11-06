// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up
// to target.

// You may assume that each input would have exactly
// one solution, and you may not use the same element twice.

// Can you come up with an algorithm
// that is less than O(n2) time complexity?

const twoSum = (nums, target) => {
  let firstIndex = 0;
  let secondIndex = nums.length - 1;
  let total = nums[firstIndex] + nums[secondIndex];
  while (total !== target) {
    if (total > 9) {
      secondIndex--;
    } else {
      firstIndex++;
    }
    total = nums[firstIndex] + nums[secondIndex];
  }

  return [firstIndex, secondIndex];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
