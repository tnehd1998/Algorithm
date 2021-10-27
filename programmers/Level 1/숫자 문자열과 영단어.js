function solution(s) {
  let answer = s;
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 17; j++) {
      answer = answer.replace(arr[i], i);
    }
  }

  answer = Number(answer);

  return answer;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("1zerotwozero3"));
