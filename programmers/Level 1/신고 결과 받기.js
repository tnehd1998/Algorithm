// function solution(id_list, report, k) {
//   let answer = [];
//   let blacklist = {};
//   let calledArr = {};

//   let arr = new Set([...report]);
//   arr = [...arr];

//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i].split(" ");
//     if (calledArr[current[0]]) {
//       calledArr[current[0]].push(current[1]);
//     } else {
//       calledArr[current[0]] = [current[1]];
//     }
//     if (blacklist[current[1]]) {
//       blacklist[current[1]]++;
//     } else {
//       blacklist[current[1]] = 1;
//     }
//   }

//   for (let i = 0; i < id_list.length; i++) {
//     let totalValue = 0;
//     let currentArr = calledArr[id_list[i]];
//     if (currentArr) {
//       for (let j = 0; j < currentArr.length; j++) {
//         if (blacklist[currentArr[j]] >= k) {
//           totalValue++;
//         }
//       }
//     }
//     answer.push(totalValue);
//   }

//   return answer;
// }

function solution(id_list, report, k) {
  let answer = [];
  let reportObj = {};
  let reportCount = {};

  report = [...new Set([...report])];

  for (let i = 0; i < report.length; i++) {
    let current = report[i].split(" ");
    if (reportObj[current[0]]) {
      reportObj[current[0]].push(current[1]);
    } else {
      reportObj[current[0]] = [current[1]];
    }
    if (reportCount[current[1]]) {
      reportCount[current[1]]++;
    } else {
      reportCount[current[1]] = 1;
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    let current = id_list[i];
    let reportArr = reportObj[current];
    let count = 0;
    if (reportArr) {
      for (let j = 0; j < reportArr.length; j++) {
        let currentPerson = reportArr[j];
        if (reportCount[currentPerson] >= k) {
          count++;
        }
      }
    }
    answer.push(count);
  }

  return answer;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
