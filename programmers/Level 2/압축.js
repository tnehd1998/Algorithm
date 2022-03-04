// 생각한 풀이 방법
// 1. A~Z까지 arr에 저장한다.
// 2. letterObj 객체에 key로 A, value: 1 형태로 저장한다.
// 3. msg를 배열인 message로 변환한다
// 4. 현재 단어인 current와 다음 단어인 next를 합친 current+next가 letterObj에 존재하면, 다음 단어와 합쳐 해당 값이 존재할 때까지 반복한다.
// 5. current+next가 존재하지 않을 때, 해당 단어를 answer에 push한다.
// 6. current+next를 letterObj 마지막에 추가한다.
// 7. message가 존재할 때까지, 4~6을 반복한다.

function solution(msg) {
  let answer = [];
  let arr = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(index + 65)
  ); // A~Z까지 arr에 저장

  let letterObj = {};
  arr.map((current, index) => (letterObj[current] = index + 1)); // letterObj 객체에 key로 A, value: 1 형태로 저장

  let message = msg.split(""); // msg를 배열인 message로 변환

  while (message.length) {
    // message가 존재할 때
    let current = message.shift(); // 현재 단어인 current
    let next = message[0]; // 다음 단어인 next
    while (letterObj[current + next]) {
      // current+next가 letterObj에 존재하면, 다음 단어와 합쳐 해당 값이 존재할 때까지 반복
      message.shift();
      current = current + next;
      next = message[0];
    }
    answer.push(letterObj[current]); // 해당 단어를 answer에 push
    letterObj[current + next] = Object.keys(letterObj).length + 1; // current+next를 letterObj 마지막에 추가
  }

  return answer;
}

console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(solution("ABABABABABABABAB"));
