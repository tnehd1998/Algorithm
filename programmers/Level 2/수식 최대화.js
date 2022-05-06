// 생각한 풀이 방법 (1차시도 -> 실패)
// 1. 숫자와 수식을 분리하여 numbers와 expressions에 각각 저장한다.
// 2. current값이 0이면 +, 1이면 -, 2이면 *로 계산을 진행한다.
// 3. 나온 수식의 갯수만큼 반복문을 반복하고, 절대값이 최대인 값을 반환한다.

// function solution(expression) {
//   let answer = 0;
//   let expressions = [];
//   let numbers = [];

//   let expressionLoc = 0;

//   // 숫자와 수식을 분리하여 numbers와 expressions에 각각 저장한다.
//   for (let i = 0; i < expression.length; i++) {
//     if (
//       expression[i] === "+" ||
//       expression[i] === "-" ||
//       expression[i] === "*"
//     ) {
//       expressions.push(expression[i]);
//       numbers.push(expression.slice(expressionLoc, i));
//       expressionLoc = i + 1;
//     }
//   }
//   numbers.push(expression.slice(expressionLoc, expression.length));

//   numbers = numbers.map((number) => +number);
//   let expressionCount = new Set([...expressions]).size;

//   // 나온 수식의 갯수만큼 반복문을 반복
//   for (let i = 0; i < expressionCount; i++) {
//     let array = [...numbers];
//     let expressionArr = [...expressions];
//     for (let j = 0; j < 3; j++) {
//       let current = j + i;
//       if (current > 2) {
//         current -= 3;
//       }
//       // current값이 0이면 +, 1이면 -, 2이면 *로 계산을 진행한다.
//       switch (current) {
//         case 0:
//           for (let k = 0; k < expressionArr.length; k++) {
//             if (expressionArr[k] === "+") {
//               let sum = array[k] + array[k + 1];
//               array.splice(k, 2, sum);
//               expressionArr.splice(k, 1);
//               k--;
//             }
//           }
//           break;
//         case 1:
//           for (let k = 0; k < expressionArr.length; k++) {
//             if (expressionArr[k] === "-") {
//               let sum = array[k] - array[k + 1];
//               array.splice(k, 2, sum);
//               expressionArr.splice(k, 1);
//               k--;
//             }
//           }
//           break;
//         case 2:
//           for (let k = 0; k < expressionArr.length; k++) {
//             if (expressionArr[k] === "*") {
//               let sum = array[k] * array[k + 1];
//               array.splice(k, 2, sum);
//               expressionArr.splice(k, 1);
//               k--;
//             }
//           }
//           break;
//       }
//     }
//     // 절대값이 최대인 값을 반환
//     answer = Math.max(answer, Math.abs(...array));
//   }

//   return answer;
// }

// 생각한 풀이 방법 (2차시도 -> 성공)
// 1. 나올수 있는 6가지 경우의 수를 선언한다.
// 2. 숫자와 수식을 분리하여 numbers와 expressions에 각각 저장한다.
// 3. 우선순위에 맞게 6가지의 연산을 한다.
// 4. 절대값이 최대인 값을 반환한다.

// function solution(expression) {
//   let answer = 0;
//   let numbers = [];
//   let expressions = [];
//   let expressionLoc = 0;

//   // 나올수 있는 6가지 경우의 수를 선언한다.
//   const equations = [
//     ["+", "-", "*"],
//     ["+", "*", "-"],
//     ["-", "+", "*"],
//     ["-", "*", "+"],
//     ["*", "+", "-"],
//     ["*", "-", "+"],
//   ];

//   // 숫자와 수식을 분리하여 numbers와 expressions에 각각 저장한다.
//   for (let i = 0; i < expression.length; i++) {
//     if (
//       expression[i] === "+" ||
//       expression[i] === "-" ||
//       expression[i] === "*"
//     ) {
//       expressions.push(expression[i]);
//       numbers.push(expression.slice(expressionLoc, i));
//       expressionLoc = i + 1;
//     }
//   }
//   numbers.push(expression.slice(expressionLoc, expression.length));

//   numbers = numbers.map((number) => +number);
//   let expressionCount = new Set([...expressions]).size;

//   // 우선순위에 맞게 6가지의 연산을 한다.
//   for (let i = 0; i < equations.length; i++) {
//     let array = [...numbers];
//     let expressionArr = [...expressions];
//     let current = equations[i];

//     for (let j = 0; j < expressionCount; j++) {
//       let currentEquation = current[j];
//       switch (currentEquation) {
//         case "+":
//           for (let k = 0; k < expressionArr.length; k++) {
//             if (expressionArr[k] === "+") {
//               let sum = array[k] + array[k + 1];
//               array.splice(k, 2, sum);
//               expressionArr.splice(k, 1);
//               k--;
//             }
//           }
//           break;
//         case "-":
//           for (let k = 0; k < expressionArr.length; k++) {
//             if (expressionArr[k] === "-") {
//               let sum = array[k] - array[k + 1];
//               array.splice(k, 2, sum);
//               expressionArr.splice(k, 1);
//               k--;
//             }
//           }
//           break;
//         case "*":
//           for (let k = 0; k < expressionArr.length; k++) {
//             if (expressionArr[k] === "*") {
//               let sum = array[k] * array[k + 1];
//               array.splice(k, 2, sum);
//               expressionArr.splice(k, 1);
//               k--;
//             }
//           }
//           break;
//       }
//     }

//     // 절대값이 최대인 값을 반환한다.
//     answer = Math.max(answer, Math.abs(...array));
//   }

//   return answer;
// }

function solution(expression) {
  let answer = 0;
  let possibilities = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  let numbers = expression.match(/\d+/g).map((number) => Number(number));
  let equations = expression.match(/\D+/g);

  for (let i = 0; i < possibilities.length; i++) {
    let currentNumbers = [...numbers];
    let currentEquations = [...equations];
    let current = possibilities[i];

    for (let j = 0; j < current.length; j++) {
      let currentEquation = current[j];

      switch (currentEquation) {
        case "+":
          for (let k = 0; k < currentEquations.length; k++) {
            if (currentEquation === currentEquations[k]) {
              let total = currentNumbers[k] + currentNumbers[k + 1];
              currentNumbers.splice(k, 2, total);
              currentEquations.splice(k, 1);
              k--;
            }
          }
          break;
        case "-":
          for (let k = 0; k < currentEquations.length; k++) {
            if (currentEquation === currentEquations[k]) {
              let total = currentNumbers[k] - currentNumbers[k + 1];
              currentNumbers.splice(k, 2, total);
              currentEquations.splice(k, 1);
              k--;
            }
          }
          break;
        case "*":
          for (let k = 0; k < currentEquations.length; k++) {
            if (currentEquation === currentEquations[k]) {
              let total = currentNumbers[k] * currentNumbers[k + 1];
              currentNumbers.splice(k, 2, total);
              currentEquations.splice(k, 1);
              k--;
            }
          }
          break;
      }
    }

    answer = Math.max(answer, Math.abs(currentNumbers[0]));
  }

  return answer;
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
console.log(solution("200-300-500-600*40+500+500"));
console.log(solution("2-990-5+2"));
