// function solution(places) {
//   let answer = [];

//   const inBound = (val) => val >= 0 && val < 5;

//   for (const place of places) {
//     place.map((row, idx) => {
//       place[idx] = row.split("");
//     });

//     const isPerson = (r, c) => place[r][c] === "P";
//     const isEmpty = (r, c) => place[r][c] === "O";

//     const keepRight = place.every((row, r) =>
//       row.every((seat, c) => {
//         if (seat === "P") {
//           if (inBound(r + 1)) {
//             if (isPerson(r + 1, c)) return false;
//             if (isEmpty(r + 1, c)) {
//               if (inBound(c + 1) && isPerson(r + 1, c + 1)) return false;
//               if (inBound(c - 1) && isPerson(r + 1, c - 1)) return false;
//               if (inBound(r + 2) && isPerson(r + 2, c)) return false;
//             }
//           }
//           if (inBound(r - 1)) {
//             if (isPerson(r - 1, c)) return false;
//             if (isEmpty(r - 1, c)) {
//               if (inBound(c + 1) && isPerson(r - 1, c + 1)) return false;
//               if (inBound(c - 1) && isPerson(r - 1, c - 1)) return false;
//               if (inBound(r - 2) && isPerson(r - 2, c)) return false;
//             }
//           }
//           if (inBound(c + 1)) {
//             if (isPerson(r, c + 1)) return false;
//             if (isEmpty(r, c + 1) && inBound(c + 2) && isPerson(r, c + 2))
//               return false;
//           }
//           if (inBound(c - 1)) {
//             if (isPerson(r, c - 1)) return false;
//             if (isEmpty(r, c - 1) && inBound(c - 2) && isPerson(r, c - 2))
//               return false;
//           }
//         }
//         return true;
//       })
//     );
//     answer.push(keepRight ? 1 : 0);
//   }

//   return answer;
// }

function isPerson(x, y, currentPlace) {
  return currentPlace[x][y] === "P" ? true : false;
}

function isEmpty(x, y, currentPlace) {
  return currentPlace[x][y] === "O" ? true : false;
}

function validPerson(currentValue, currentPlace, pointX, pointY) {
  if (currentValue === "P") {
    if (isPerson(pointX + 1, pointY, currentPlace)) {
      return false;
    }
    if (isEmpty(pointX + 1, pointY, currentPlace)) {
      if (isPerson(pointX + 1, pointY - 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX + 1, pointY + 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX + 2, pointY, currentPlace)) {
        return false;
      }
    }
    if (isPerson(pointX - 1, pointY, currentPlace)) {
      return false;
    }
    if (isEmpty(pointX - 1, pointY, currentPlace)) {
      if (isPerson(pointX - 1, pointY - 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX - 1, pointY + 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX - 2, pointY, currentPlace)) {
        return false;
      }
    }
    if (isPerson(pointX, pointY + 1, currentPlace)) {
      return false;
    }
    if (isEmpty(pointX, pointY + 1, currentPlace)) {
      if (isPerson(pointX - 1, pointY + 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX + 1, pointY + 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX, pointY + 2, currentPlace)) {
        return false;
      }
    }
    if (isPerson(pointX, pointY - 1, currentPlace)) {
      return false;
    }
    if (isEmpty(pointX, pointY - 1, currentPlace)) {
      if (isPerson(pointX - 1, pointY - 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX + 1, pointY - 1, currentPlace)) {
        return false;
      }
      if (isPerson(pointX, pointY - 2, currentPlace)) {
        return false;
      }
    }
  }
  return true;
}

function solution(places) {
  let answer = [];

  for (let i = 0; i < places.length; i++) {
    let currentPlace = places[i];
    for (let j = 0; j < currentPlace.length; j++) {
      currentPlace[j] = ["X", ...currentPlace[j].split(""), "X"];
    }
    currentPlace.unshift(Array(7).fill("X"));
    currentPlace.push(Array(7).fill("X"));

    console.log(currentPlace);

    let isValid = true;

    for (let j = 1; j <= 6; j++) {
      for (let k = 1; k <= 6; k++) {
        let currentValue = currentPlace[j][k];
        if (!validPerson(currentValue, currentPlace, j, k)) {
          isValid = false;
          break;
        }
      }
    }

    isValid ? answer.push(1) : answer.push(0);
  }

  return answer;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
