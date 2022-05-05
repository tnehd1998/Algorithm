// 생각한 풀이 방법 (1차 시도 -> 효율성 실패)
// 1. 개발자를 나타는 developers에 개발자 정보를 [지원자 정보, 점수] 형태로 저장한다.
// 2. currentQuery에 -와 and를 제외 한 후 개발자 정보와 같은 형태로 저장한다.
// 3. 해당 개발자가 currentQuery에 부합하면 result를 증가시킨다.

// const getDevelopersArr = (info) => {
//   // 개발자를 나타는 developers에 개발자 정보를 [지원자 정보, 점수] 형태로 저장한다.
//   let result = [];
//   for (let i = 0; i < info.length; i++) {
//     let current = info[i].split(" ");
//     let score = current.pop();
//     result.push([current, +score]);
//   }
//   return result;
// };

// const validDeveloper = (query, developers) => {
//   let result = 0;
//   for (let i = 0; i < developers.length; i++) {
//     let valid = true;
//     if (query[0].join("").length > developers[i][0].join("").length) {
//       continue;
//     }
//     for (let j = 0; j < query[0].length; j++) {
//       if (!developers[i][0].includes(query[0][j])) {
//         valid = false;
//         break;
//       }
//     }
//     if (valid) {
//       // 해당 개발자가 currentQuery에 부합하면 result를 증가시킨다.
//       if (developers[i][1] >= query[1]) {
//         result++;
//       }
//     }
//   }
//   return result;
// };

// const solution = (info, query) => {
//   let answer = [];
//   let developers = getDevelopersArr(info);

//   for (let i = 0; i < query.length; i++) {
//     let currentQuery = query[i]
//       .split(" ")
//       .filter((item) => item !== "and" && item !== "-");
//     let score = currentQuery.pop();
//     currentQuery = [currentQuery, +score]; // currentQuery에 -와 and를 제외 한 후 개발자 정보와 같은 형태로 저장한다.
//     let count = validDeveloper(currentQuery, developers);
//     answer.push(count);
//   }

//   return answer;
// };

// 생각한 풀이 방법 (2차 시도 -> 성공)
// 1. 개발자를 나타내는 가능한 모든 경우를 developers에 저장한다.
// 2. 모든 값들의 score값을 기준으로 정렬한다.
// 3. currentQuery에 and를 제외 한 후 해당 조건이 developers에 존재하는지 확인한다,
// 3-1. 존재하면 이분 탐색을 활용해 해당 값 또는 해당 값보다 하나 작은 값을 구한 후, 해당 값을 전체 값에서 뺀값을 push한다.
// 3-2. 존재하지 않으면 0을 반환한다.

// function solution(info, query) {
//   let answer = [];
//   let developers = {};

//   function possibilities(infos, score, map, start) {
//     let key = infos.join("");
//     let value = map[key];

//     if (value) {
//       map[key].push(+score);
//     } else {
//       map[key] = [+score];
//     }

//     for (let i = start; i < infos.length; i++) {
//       let arr = [...infos];
//       arr[i] = "-";
//       possibilities(arr, score, map, i + 1); // 개발자를 나타내는 가능한 모든 경우를 developers에 저장한다.
//     }
//   }

//   for (let i = 0; i < info.length; i++) {
//     let currentInfo = info[i].split(" ");
//     let score = currentInfo.pop();

//     possibilities(currentInfo, score, developers, 0);
//   }

//   for (const key in developers) {
//     developers[key] = developers[key].sort((a, b) => a - b); // 모든 값들의 score값을 기준으로 정렬한다
//   }

//   function getAnswer(score, arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid = Math.floor((start + end) / 2);
//     while (start <= end) {
//       if (arr[mid] === score) {
//         return mid;
//       }
//       if (arr[mid] < score) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }

//       mid = Math.floor((start + end) / 2);
//     }

//     return mid + 1;
//   }

//   for (let i = 0; i < query.length; i++) {
//     // currentQuery에 and를 제외
//     let currentQuery = query[i].split(" ").filter((item) => item !== "and");
//     let score = currentQuery.pop();
//     currentQuery = currentQuery.join("");
//     // 해당 조건이 developers에 존재하는지 확인
//     if (developers[currentQuery]) {
//       // 존재하면 이분 탐색을 활용해 해당 값또는 해당 값보다 하나 작은 값을 구한 후, 해당 값을 전체 값에서 뺀값을 push한다.
//       let count =
//         developers[currentQuery].length -
//         getAnswer(score, developers[currentQuery]);
//       answer.push(count);
//     } else {
//       // 존재하지 않으면 0을 push한다.
//       answer.push(0);
//     }
//   }

//   return answer;
// }

function solution(info, query) {
  let answer = [];
  let allPossibilities = {};

  function getAllPossibilities(infos, score, start) {
    let key = infos.join("");
    let value = allPossibilities[key];

    if (value) {
      allPossibilities[key].push(score);
    } else {
      allPossibilities[key] = [score];
    }

    for (let i = start; i < infos.length; i++) {
      let arr = [...infos];
      arr[i] = "-";
      getAllPossibilities(arr, score, i + 1);
    }
  }

  for (let i = 0; i < info.length; i++) {
    let current = info[i].split(" ");
    let score = Number(current.pop());

    getAllPossibilities(current, score, 0);
  }

  for (let key in allPossibilities) {
    allPossibilities[key] = allPossibilities[key].sort((a, b) => a - b);
  }

  function getAnswer(score, arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
      if (arr[mid] < score) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }

      mid = Math.floor((start + end) / 2);
    }

    return mid + 1;
  }

  for (let i = 0; i < query.length; i++) {
    let currentQuery = query[i].split(" ").filter((word) => word !== "and");
    let score = +currentQuery.pop();
    let combinedQuery = currentQuery.join("");
    let scoreArr = allPossibilities[combinedQuery];
    if (scoreArr) {
      let count = scoreArr.length - getAnswer(score, scoreArr);
      answer.push(count);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
      "java frontend junior pizza 150",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
