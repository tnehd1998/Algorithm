// 생각한 풀이 방법
// 1. switch문을 사용하여 각 경우에 맞게 operation을 실행함

// 2-1. operation이 D 1일 때
// 2-1-1. queue에 값이 존재하면 맨 앞의 값을 빼줌

// 2-2. operation이 D -1일 때
// 2-2-1. queue에 값이 존재하면 맨 뒤의 값을 빼줌

// 2-3. operation이 | 숫자일 때
// 2-3-1. 해당 숫자를 queue에 넣음
// 2-3-2. queue를 내림 차순으로 정렬함

// 3. queue 최대 값과 최소값을 반환함 (queue값이 존재하지 않으면 [0,0] 반환)

function solution(operations) {
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    let currentOperation = operations[i];
    switch (
      currentOperation //switch문을 사용하여 각 경우에 맞게 operation을 실행함
    ) {
      case "D 1": // operation이 D 1일 때
        if (queue.length) {
          queue.shift(); // queue에 값이 존재하면 맨 앞의 값을 빼줌
        }
        break;
      case "D -1": // operation이 D -1일 때
        if (queue.length) {
          queue.pop(); // queue에 값이 존재하면 맨 뒤의 값을 빼줌
        }
        break;
      default:
        // operation이 | 숫자일 때
        let value = currentOperation.split(" ");
        queue.push(value[1]); // 해당 숫자를 queue에 넣음
        queue.sort((a, b) => b - a); // queue를 내림 차순으로 정렬함
        break;
    }
  }

  // queue 최대 값과 최소값을 반환함 (queue값이 존재하지 않으면 [0,0] 반환)
  return queue.length ? [Number(queue.shift()), Number(queue.pop())] : [0, 0];
}

console.log(solution(["I 16", "D 1"]));
console.log(solution(["I 7", "I 5", "I -5", "D -1"]));
