// 생각한 풀이 방법
// 1. numberLoc을 통해 알파벳 자리수에 맞는 값을 구한다.
// 2. A와의 거리 차이만큼 자릿수에 맞는 값을 추가로 더한다.

function numberLoc(number) {
  // numberLoc을 통해 알파벳 자리수에 맞는 값을 구한다
  switch (number) {
    case 0:
      return 781;
    case 1:
      return 156;
    case 2:
      return 31;
    case 3:
      return 6;
    case 4:
      return 1;
  }
}

function solution(word) {
  let answer = word.length;
  for (let i = 0; i < word.length; i++) {
    let current = word[i];

    switch (
      current // A와의 거리 차이만큼 자릿수에 맞는 값을 추가로 더한다
    ) {
      case "E":
        answer += 1 * numberLoc(i);
        break;
      case "I":
        answer += 2 * numberLoc(i);
        break;
      case "O":
        answer += 3 * numberLoc(i);
        break;
      case "U":
        answer += 4 * numberLoc(i);
        break;
    }
  }

  return answer;
}

solution("AAAAE");
solution("AAAE");
solution("I");
solution("EIO");
