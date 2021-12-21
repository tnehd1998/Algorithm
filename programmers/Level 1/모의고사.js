// 생각한 풀이 방법
// 1. answers의 길이 만큼 각각 수포자의 찍는 방식에 맞게 배열을 만듬
// 2. 값을 맞추는 경우 해당 count를 증가시킴
// 3. firstCount, secondCount, thirdCount의 최대 값을 찾음
// 4. 최대 값과 같은 경우 answer에 값을 push한 후 반환함

function solution(answers) {
  let answer = [];

  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;

  // answers의 길이 만큼 각각 수포자의 찍는 방식에 맞게 배열을 만듬
  while (first.length < answers.length) {
    first = [...first, ...first];
  }
  while (second.length < answers.length) {
    second = [...second, ...second];
  }
  while (third.length < answers.length) {
    third = [...third, ...third];
  }

  // 값을 맞추는 경우 해당 count를 증가시킴
  for (let i = 0; i < answers.length; i++) {
    if (first[i] === answers[i]) firstCount++;
    if (second[i] === answers[i]) secondCount++;
    if (third[i] === answers[i]) thirdCount++;
  }

  // firstCount, secondCount, thirdCount의 최대 값을 찾음
  let max = Math.max(firstCount, secondCount, thirdCount);

  // 최대 값과 같은 경우 answer에 값을 push한 후 반환함
  if (firstCount === max) answer.push(1);
  if (secondCount === max) answer.push(2);
  if (thirdCount === max) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
