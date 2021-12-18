// 생각한 풀이 방법
// 1. 기존 priorities의 위치를 저장하는 array를 만든다.
// 2. priorities의 탐색 과정을 array에 똑같이 적용한다.
// 3. 프린트가 가능할 때, priorities는 해당 값을 삭제하고,
// array는 해당 값을 answerArray에 추가한다.
// 4. priorities가 존재할 때까지 2~3과정을 반복한다.
// 5. location과 일치하는 값을 answerArray를 탐색해 해당 값에 +1을 한 후 반환한다

function solution(priorities, location) {
  // 기존 priorities의 위치를 저장하는 array를 만든다.
  let array = new Array(priorities.length).fill().map((obj, index) => index);
  let answerArray = [];

  while (priorities.length) {
    // priorities가 존재할 때까지 과정을 반복
    // priorities의 탐색 과정을 array에 똑같이 적용한다.
    const maxValue = Math.max(...priorities);
    const currentValue = priorities.shift();
    if (currentValue === maxValue) {
      // 프린트가 가능할 때, priorities는 해당 값을 삭제
      answerArray.push(array.shift()); // array는 해당 값을 answerArray에 추가
    } else {
      // 최대값이 아닌 경우 해당 값을 맨 뒤에 다시 넣음
      priorities.push(currentValue);
      array.push(array.shift());
    }
  }

  // location과 일치하는 값을 answerArray를 탐색해 해당 값에 +1을 한 후 반환
  for (let i = 0; i < answerArray.length; i++) {
    if (answerArray[i] === location) {
      return i + 1;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
