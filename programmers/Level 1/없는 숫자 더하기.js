function solution(numbers) {
  let arr = Array(10).fill(0);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    arr[numbers[i]]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
