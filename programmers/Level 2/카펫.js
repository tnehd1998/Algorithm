// 생각한 풀이 방법
// 1. 격자의 갯수에 가능한 조합을 possibleArr에 저장
// 2. brown의 갯수는 (가로+세로)*2-4라는 공식이 성립하기 때문에
// 조건에 부합하는 조합을 반환함

function solution(brown, yellow) {
  let total = brown + yellow;
  let possibleArr = [];

  // 격자의 갯수에 가능한 조합을 possibleArr에 저장
  for (let i = 1; i < Math.floor(total / 2); i++) {
    if (total % i === 0 && total / i >= i) {
      possibleArr.push([total / i, i]);
    }
  }

  return findAnswerWithBrown(possibleArr, brown);

  //  brown의 갯수는 (가로+세로)*2-4라는 공식이 성립하기 때문에 조건에 부합하는 조합을 반환함
  function findAnswerWithBrown(arr, brown) {
    for (let i = 0; i < arr.length; i++) {
      let currentTotal = (arr[i][0] + arr[i][1]) * 2 - 4;
      if (currentTotal === brown) {
        return arr[i];
      }
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
