// 생각한 풀이 방법
// 1. s를 왼쪽으로 한칸 씩 회전시키며 s의 길이만큼 반복한다
// 2. (,{,[ 이 나오면 check에 해당 값을 push한다.
// 3. ),},] 이 나오면 check의 마지막 값과 맞는지 확인한다.
// 3-1. 다를 경우 해당 조건은 만족하지 않음
// 3-2. 짝이 맞는 경우 check을 pop시킴
// 4. check가 비어있을 경우 count를 증가시킴
// 5. 2~4를 arr을 모두 탐색할 때까지 반복함

function solution(s) {
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    // s를 왼쪽으로 한칸 씩 회전시키며 s의 길이만큼 반복
    let first = s.shift();
    s.push(first);

    let arr = [...s];
    let check = [];
    let count = 0;
    let valid = true;

    while (arr.length) {
      // arr을 모두 탐색할 때까지 반복함
      let current = arr.shift();
      if (current === "(" || current === "[" || current === "{") {
        // (,{,[ 이 나오면 check에 해당 값을 push
        check.push(current);
      } else {
        if (current === ")") {
          if (check[check.length - 1] !== "(") {
            // ),},] 이 나오면 check의 마지막 값과 맞는지 확인
            valid = false; // 다를 경우 해당 조건은 만족하지 않음
            break;
          }
          check.pop(); // 짝이 맞는 경우 check을 pop시킴
        }
        if (current === "]") {
          if (check[check.length - 1] !== "[") {
            // ),},] 이 나오면 check의 마지막 값과 맞는지 확인
            valid = false; // 다를 경우 해당 조건은 만족하지 않음
            break;
          }
          check.pop(); // 짝이 맞는 경우 check을 pop시킴
        }
        if (current === "}") {
          if (check[check.length - 1] !== "{") {
            // ),},] 이 나오면 check의 마지막 값과 맞는지 확인
            valid = false; // 다를 경우 해당 조건은 만족하지 않음
            break;
          }
          check.pop(); // 짝이 맞는 경우 check을 pop시킴
        }
      }
      if (check.length === 0) {
        count++; // check가 비어있을 경우 count를 증가시킴
      }
    }
    if (valid) {
      return count;
    }
  }
  return 0;
}

console.log(solution("[](){}"));
