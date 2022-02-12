// 생각한 풀이 방법
// 1. 숫자가 짝수일 때 이진수로 변환하면
// 마지막이 무조건 0이기 때문에 마지막 자리만 1로 바꿔주면 되므로 1을 더해준다.
// 2. 숫자가 홀수일 때 이진수로 변환후 0이 처음 나오는 자릿수를 찾는다.
// 2-1. 0이 처음 나오는 순간 그 전 자리수는 1임이 확실하기 때문에,
// 01을 제거하고 10을 넣어 해당 이진수를 숫자로 변환한 후 answer에 더한다.

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (current % 2 === 0) {
      // 숫자가 짝수일 때
      answer.push(current + 1); // 1을 더한 값을 answer에 추가한다.
    } else {
      // 숫자가 홀수일 때
      current = "0" + current.toString(2);
      let totalLength = current.length;
      for (let j = totalLength - 1; j >= 0; j--) {
        if (+current[j] === 0) {
          // 0이 처음 나오는 자릿수를 찾는다
          answer.push(
            parseInt(
              current.substring(0, j) +
                "10" +
                current.substring(j + 2, totalLength),
              2
            ) // 01을 제거하고 10을 넣어 해당 이진수를 숫자로 변환
          );
          break;
        }
      }
    }
  }

  return answer;
}

console.log(solution([2, 7]));
