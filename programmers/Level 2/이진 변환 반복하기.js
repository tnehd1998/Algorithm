// 생각한 풀이 방법
// 1. 연산 횟수를 count, 삭제된 0의 갯수를 deletedZeros에 저장한다.
// 2. 해당 숫자의 0만 저장한 withZero와 1만 저장한 withoutZero로 분리한다.
// 3. withZero만큼 deletedZeros를 증가시키고, withoutZero 값으로 다음 연산 값을 준비한다.
// 4. 매 연산마다 count를 증가시키고, 1이 될때까지 해당 연산을 반복한다.

function solution(s) {
  let count = 0; // 연산 횟수
  let deletedZeros = 0; // 삭제된 0의 갯수

  while (s.length !== 1) {
    // 1이 될때까지 해당 연산을 반복
    s = s.split("").map((item) => +item);
    let withZero = s.filter((number) => number === 0); // 0만 저장
    let withoutZero = s.filter((number) => number === 1); // 1만 저장

    deletedZeros += withZero.length; // withZero만큼 deletedZeros를 증가
    s = withoutZero.length.toString(2); // withoutZero 값으로 다음 연산 값을 준비
    count++; // 매 연산마다 count를 증가
  }

  return [count, deletedZeros];
}

solution("110010101001");
solution("01110");
solution("1111111");
