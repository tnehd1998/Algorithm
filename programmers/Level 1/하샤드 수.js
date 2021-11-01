function solution(x) {
  let sum = 0;
  let arr = x
    .toString()
    .split("")
    .map((item) => +item);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return x % sum === 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
