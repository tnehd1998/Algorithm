// function solution(numbers, hand) {
//   let currentLeft = 10;
//   let currentRight = 12;
//   let answer = "";
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
//       answer += "L";
//       currentLeft = numbers[i];
//     } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
//       answer += "R";
//       currentRight = numbers[i];
//     } else {
//       numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
//       let leftDiff = getDistance(currentLeft - numbers[i]);
//       let rightDiff = getDistance(currentRight - numbers[i]);
//       if (leftDiff === rightDiff) {
//         if (hand === "left") {
//           answer += "L";
//           currentLeft = numbers[i];
//         } else {
//           answer += "R";
//           currentRight = numbers[i];
//         }
//       } else if (leftDiff > rightDiff) {
//         answer += "R";
//         currentRight = numbers[i];
//       } else {
//         answer += "L";
//         currentLeft = numbers[i];
//       }
//     }
//   }

//   return answer;
// }

// function getDistance(num) {
//   num = Math.abs(num);
//   if (num === 0) return 0;
//   if (num === 1 || num === 3) return 1;
//   if (num === 2 || num === 4 || num === 6) return 2;
//   if (num === 5 || num === 7 || num === 9) return 3;
//   return 4;
// }

function calculateDistance(currentLoc, targetNum) {
  let diff = Math.abs(currentLoc - targetNum);
  if (diff === 0) {
    return 0;
  }
  if (diff === 1 || diff === 3) {
    return 1;
  }
  if (diff === 2 || diff === 4 || diff === 6) {
    return 2;
  }
  if (diff === 5 || diff === 7 || diff === 9) {
    return 3;
  }
  return 4;
}

function solution(numbers, hand) {
  let answer = [];
  let currentLeft = 10;
  let currentRight = 12;

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = numbers[i];
    if (currentNum === 0) {
      currentNum = 11;
    }
    if (currentNum === 1 || currentNum === 4 || currentNum === 7) {
      answer.push("L");
      currentLeft = currentNum;
    } else if (currentNum === 3 || currentNum === 6 || currentNum === 9) {
      answer.push("R");
      currentRight = currentNum;
    } else {
      let leftCost = calculateDistance(currentLeft, currentNum);
      let rightCost = calculateDistance(currentRight, currentNum);
      if (leftCost < rightCost) {
        answer.push("L");
        currentLeft = currentNum;
      } else if (leftCost > rightCost) {
        answer.push("R");
        currentRight = currentNum;
      } else {
        if (hand === "left") {
          answer.push("L");
          currentLeft = currentNum;
        } else {
          answer.push("R");
          currentRight = currentNum;
        }
      }
    }
  }

  return answer.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
